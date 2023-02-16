import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { Database } from "../lib/database.types";

export type TaskStatus = "open" | "closed" | "deleted";

export function useGetTasks(status: TaskStatus) {
  const client = useSupabaseClient<Database>();

  return useQuery(["tasks", { type: status }], async () => {
    const query = client.from("tasks").select("*");

    switch (status) {
      case "open":
        query.eq("is_deleted", false).eq("is_closed", false);
        break;
      case "closed":
        query.eq("is_deleted", false).eq("is_closed", true);
        break;
      case "deleted":
        query.eq("is_deleted", true);
        break;
    }

    const { data } = await query.order("created_at", { ascending: false });
    return data;
  });
}
