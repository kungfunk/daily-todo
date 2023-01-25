export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tasks: {
        Row: {
          closed_at: string | null
          created_at: string | null
          description: string | null
          id: number
          is_closed: boolean
          slug: string | null
          type: string | null
          user_id: string
        }
        Insert: {
          closed_at?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          is_closed: boolean
          slug?: string | null
          type?: string | null
          user_id: string
        }
        Update: {
          closed_at?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          is_closed?: boolean
          slug?: string | null
          type?: string | null
          user_id?: string
        }
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
  }
}
