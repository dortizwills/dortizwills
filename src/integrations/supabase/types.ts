export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      analytics_events: {
        Row: {
          event_data: Json | null
          event_type: string
          id: string
          page_url: string | null
          session_id: string
          timestamp: string
        }
        Insert: {
          event_data?: Json | null
          event_type: string
          id?: string
          page_url?: string | null
          session_id: string
          timestamp?: string
        }
        Update: {
          event_data?: Json | null
          event_type?: string
          id?: string
          page_url?: string | null
          session_id?: string
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "analytics_events_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "visitor_sessions"
            referencedColumns: ["session_id"]
          },
        ]
      }
      contact_leads: {
        Row: {
          company: string | null
          created_at: string
          email: string | null
          id: string
          lead_score: number | null
          name: string | null
          notes: string | null
          phone: string | null
          session_id: string | null
          source: string | null
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          lead_score?: number | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          session_id?: string | null
          source?: string | null
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          lead_score?: number | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          session_id?: string | null
          source?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_leads_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "visitor_sessions"
            referencedColumns: ["session_id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          status: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          status?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      page_views: {
        Row: {
          id: string
          page_title: string | null
          page_url: string
          scroll_depth: number | null
          session_id: string
          time_on_page: number | null
          timestamp: string
        }
        Insert: {
          id?: string
          page_title?: string | null
          page_url: string
          scroll_depth?: number | null
          session_id: string
          time_on_page?: number | null
          timestamp?: string
        }
        Update: {
          id?: string
          page_title?: string | null
          page_url?: string
          scroll_depth?: number | null
          session_id?: string
          time_on_page?: number | null
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_views_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "visitor_sessions"
            referencedColumns: ["session_id"]
          },
        ]
      }
      visitor_sessions: {
        Row: {
          browser: string | null
          city: string | null
          country: string | null
          device: string | null
          duration_seconds: number | null
          first_visit: string
          id: string
          is_returning_visitor: boolean | null
          landing_page: string | null
          last_activity: string
          os: string | null
          page_views: number | null
          referrer: string | null
          session_id: string
          user_agent: string | null
          visitor_ip: string | null
        }
        Insert: {
          browser?: string | null
          city?: string | null
          country?: string | null
          device?: string | null
          duration_seconds?: number | null
          first_visit?: string
          id?: string
          is_returning_visitor?: boolean | null
          landing_page?: string | null
          last_activity?: string
          os?: string | null
          page_views?: number | null
          referrer?: string | null
          session_id: string
          user_agent?: string | null
          visitor_ip?: string | null
        }
        Update: {
          browser?: string | null
          city?: string | null
          country?: string | null
          device?: string | null
          duration_seconds?: number | null
          first_visit?: string
          id?: string
          is_returning_visitor?: boolean | null
          landing_page?: string | null
          last_activity?: string
          os?: string | null
          page_views?: number | null
          referrer?: string | null
          session_id?: string
          user_agent?: string | null
          visitor_ip?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
