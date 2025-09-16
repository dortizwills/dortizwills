import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WebhookPayload {
  type: string;
  table: string;
  record: any;
  schema: string;
  old_record: null | any;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const payload: WebhookPayload = await req.json();
    
    // Only handle insert events on auth.users table
    if (payload.type === 'INSERT' && payload.table === 'users' && payload.schema === 'auth') {
      const user = payload.record;
      
      // Create Supabase client with service role key
      const supabaseAdmin = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
      );

      // Create profile for the new user
      const { error } = await supabaseAdmin
        .from('profiles')
        .insert({
          user_id: user.id,
          display_name: user.raw_user_meta_data?.display_name || user.email?.split('@')[0] || null,
          role: 'user' // Default role
        });

      if (error) {
        console.error('Error creating profile:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to create profile' }),
          { 
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      console.log(`Profile created for user: ${user.id}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});