
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Contact form function called');
    const { name, email, subject, message }: ContactFormData = await req.json();
    console.log('Received form data:', { name, email, subject: subject || "No subject", messageLength: message?.length });

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Missing required fields:', { name: !!name, email: !!email, message: !!message });
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    console.log('Attempting to save to database...');
    // Insert the contact form submission into the database
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        subject: subject || "New Contact Form Submission",
        message,
      })
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to save submission", details: error.message }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Contact form submission saved successfully:", data.id);

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
    console.log('Attempting to send emails...');
    const resend = new Resend(resendApiKey);

    try {
      // Send notification email to you
      console.log('Sending notification email...');
      const notificationResult = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["dortizwills@gmail.com"],
        subject: `New Contact Form Submission: ${subject || "No Subject"}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "No subject provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
      });

      console.log('Notification email result:', notificationResult);

      // Send confirmation email to the sender
      console.log('Sending confirmation email...');
      const confirmationResult = await resend.emails.send({
        from: "Daniel Ortiz-Wills <onboarding@resend.dev>",
        to: [email],
        subject: "Thanks for reaching out!",
        html: `
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out! I've received your message and will get back to you within 24 hours.</p>
          <p><strong>Your message:</strong></p>
          <p><em>"${message}"</em></p>
          <p>Looking forward to exploring your project vision!</p>
          <p>Best regards,<br>Daniel Ortiz-Wills</p>
        `,
      });

      console.log('Confirmation email result:', confirmationResult);
      console.log("Both emails sent successfully");

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
      console.error("Email sending failed:", emailError);
      
      // Check if it's a DNS/domain verification issue
      const errorMessage = emailError.message || emailError.toString();
      let userMessage = "Your message has been saved, but there was an issue sending confirmation emails.";
      
      if (errorMessage.includes('DNS') || errorMessage.includes('domain') || errorMessage.includes('verify')) {
        userMessage += " This appears to be a domain verification issue with the email service.";
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: userMessage,
          warning: "Email delivery issue detected",
          technicalDetails: errorMessage
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

  } catch (error) {
    console.error("Error in contact form function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error", 
        details: error.message || error.toString() 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
