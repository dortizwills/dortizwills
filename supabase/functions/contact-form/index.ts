
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Validation schema with security-focused length limits
const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  subject: z.string()
    .trim()
    .max(200, "Subject must be less than 200 characters")
    .optional(),
  message: z.string()
    .trim()
    .min(1, "Message is required")
    .max(5000, "Message must be less than 5000 characters"),
});

// Simple rate limiting using in-memory store
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  
  record.count++;
  return true;
}

// Sanitize text for plain text email - remove any control characters
function sanitizeText(text: string): string {
  return text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIp = req.headers.get("x-forwarded-for")?.split(',')[0] || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    if (!checkRateLimit(clientIp)) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ 
          error: "Too many submissions. Please try again later."
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const requestBody = await req.json();
    
    // Validate input using zod schema
    const validation = contactFormSchema.safeParse(requestBody);
    
    if (!validation.success) {
      console.warn('Validation failed:', validation.error.errors[0].message);
      return new Response(
        JSON.stringify({ 
          error: "Invalid form data. Please check your input and try again."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, subject, message } = validation.data;

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Insert the contact form submission into the database
    const { error } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        subject: subject || "New Contact Form Submission",
        message,
      });

    if (error) {
      console.error("Database error:", error.code);
      return new Response(
        JSON.stringify({ error: "Unable to process your submission. Please try again later." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Check if Resend API key is available
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not found in environment variables");
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Your message has been received and saved. Email notifications are currently being configured.",
          warning: "Email sending is not yet configured"
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Resend for email notifications
    const resend = new Resend(resendApiKey);

    // Sanitize all text content for email
    const safeName = sanitizeText(name);
    const safeEmail = sanitizeText(email);
    const safeSubject = sanitizeText(subject || "No Subject");
    const safeMessage = sanitizeText(message);

    try {
      // Send notification email to you (plain text for security)
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["dortizwills@gmail.com"],
        subject: `New Contact: ${safeSubject}`,
        text: `
New Contact Form Submission

Name: ${safeName}
Email: ${safeEmail}
Subject: ${safeSubject}

Message:
${safeMessage}

Submitted at: ${new Date().toLocaleString()}
        `,
      });

      // Send confirmation email to the sender (plain text for security)
      await resend.emails.send({
        from: "Daniel Ortiz-Wills <onboarding@resend.dev>",
        to: [safeEmail],
        subject: "Thanks for reaching out!",
        text: `
Hi ${safeName},

Thank you for reaching out! I've received your message and will get back to you within 24 hours.

Your message:
"${safeMessage}"

Looking forward to exploring your project vision!

Best regards,
Daniel Ortiz-Wills
        `,
      });

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Your message has been received and confirmation emails have been sent!" 
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );

    } catch (emailError) {
      console.error("Email sending failed:", emailError.name);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Your message has been saved. We'll get back to you soon!",
          warning: "Email notifications may be delayed"
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

  } catch (error) {
    console.error("Error in contact form function:", error.name);
    return new Response(
      JSON.stringify({ 
        error: "Unable to process your request. Please try again later."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
