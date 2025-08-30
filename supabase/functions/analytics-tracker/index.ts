import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { type, sessionId, data } = await req.json();

    console.log(`Processing analytics event: ${type} for session: ${sessionId}`);

    switch (type) {
      case 'session_start':
        const { error: sessionError } = await supabase
          .from('visitor_sessions')
          .insert([{
            session_id: sessionId,
            visitor_ip: req.headers.get('x-forwarded-for') || 'unknown',
            user_agent: req.headers.get('user-agent') || 'unknown',
            browser: data.browser,
            device: data.device,
            os: data.os,
            referrer: data.referrer,
            landing_page: data.landingPage,
            first_visit: new Date().toISOString(),
            last_activity: new Date().toISOString(),
            page_views: 1
          }]);

        if (sessionError) throw sessionError;
        break;

      case 'page_view':
        // Insert page view
        const { error: pageViewError } = await supabase
          .from('page_views')
          .insert([{
            session_id: sessionId,
            page_url: data.url,
            page_title: data.title,
            timestamp: new Date().toISOString()
          }]);

        if (pageViewError) throw pageViewError;

        // Update session page count
        const { error: updateError } = await supabase
          .from('visitor_sessions')
          .update({
            page_views: data.pageCount,
            last_activity: new Date().toISOString(),
            duration_seconds: Math.floor((Date.now() - data.startTime) / 1000)
          })
          .eq('session_id', sessionId);

        if (updateError) throw updateError;
        break;

      case 'event':
        const { error: eventError } = await supabase
          .from('analytics_events')
          .insert([{
            session_id: sessionId,
            event_type: data.eventType,
            event_data: data.eventData || {},
            page_url: data.pageUrl,
            timestamp: new Date().toISOString()
          }]);

        if (eventError) throw eventError;
        break;

      case 'contact_lead':
        const { error: leadError } = await supabase
          .from('contact_leads')
          .insert([{
            session_id: sessionId,
            email: data.email,
            name: data.name,
            company: data.company,
            phone: data.phone,
            source: data.source || 'contact_form',
            lead_score: data.leadScore || 10,
            notes: data.notes
          }]);

        if (leadError) throw leadError;
        break;

      default:
        return new Response(
          JSON.stringify({ error: 'Unknown analytics event type' }),
          { 
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
    }

    console.log(`Successfully processed ${type} event`);

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Analytics tracker error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});