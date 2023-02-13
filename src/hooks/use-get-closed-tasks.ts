import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { Database } from "../lib/database.types";

export function useGetClosedTasks() {
  const client = useSupabaseClient<Database>();

  return useQuery(["tasks-closed"], async () => {
    const { data } = await client
      .from("tasks")
      .select("*")
      .eq("is_closed", true)
      .order("created_at", { ascending: false });
    return data;
  });
}
