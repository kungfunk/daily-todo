import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { Database } from "../lib/database.types";

export function useGetOpenTasks() {
  const client = useSupabaseClient<Database>();

  return useQuery(["tasks-open"], async () => {
    const { data } = await client
      .from("tasks")
      .select("*")
      .eq("is_closed", false)
      .order("created_at", { ascending: false });
    return data;
  });
}
