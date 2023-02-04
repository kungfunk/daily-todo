import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

export function getSupabaseClient() {
  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

  return createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
}
