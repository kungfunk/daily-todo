import { useMemo } from "react";
import { getSupabaseClient } from "../lib/supabase";

export function useSupabase() {
  return useMemo(getSupabaseClient, []);
}
