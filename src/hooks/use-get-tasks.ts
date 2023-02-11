import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { Database } from "../lib/database.types";

export function useGetTasks() {
  const client = useSupabaseClient<Database>();

  return useQuery(["tasks"], async () => {
    const { data } = await client
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: false });
    return data;
  });
}
