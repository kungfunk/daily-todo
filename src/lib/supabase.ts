import { createClient } from "@supabase/supabase-js";
import { Task } from "../interfaces/tasks";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

interface Database {
  public: {
    Tables: {
      tasks: {
        Row: Task; // The data expected to be returned from a "select" statement.
        Insert: {}; // The data expected passed to an "insert" statement.
        Update: {}; // The data expected passed to an "update" statement.
      };
    };
  };
}

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
