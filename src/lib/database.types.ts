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
          created_at: string
          description: string
          id: number
          is_closed: boolean
          is_deleted: boolean
          slug: string
          user_id: string
        }
        Insert: {
          closed_at?: string | null
          created_at?: string
          description?: string
          id?: number
          is_closed: boolean
          is_deleted?: boolean
          slug: string
          user_id: string
        }
        Update: {
          closed_at?: string | null
          created_at?: string
          description?: string
          id?: number
          is_closed?: boolean
          is_deleted?: boolean
          slug?: string
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
