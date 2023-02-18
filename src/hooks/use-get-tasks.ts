import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { Database } from "../lib/database.types";
import { getLastWeekDate, getTodayDate, getYesterdayDate } from "../lib/date";

export const TASK_GROUPS = [
  "today",
  "yesterday",
  "last-week",
  "open",
  "closed",
  "deleted",
] as const;

export type TaskGroups = (typeof TASK_GROUPS)[number];

export function isValidTaskGroup(
  status: string | undefined
): status is TaskGroups {
  return TASK_GROUPS.includes(status as TaskGroups);
}

export function useGetTasks(status: TaskGroups) {
  const client = useSupabaseClient<Database>();

  return useQuery(["tasks", { type: status }], async () => {
    const query = client.from("tasks").select("*");

    switch (status) {
      case "today":
        query.gte("created_at", getTodayDate());
        break;
      case "yesterday":
        query
          .gte("created_at", getYesterdayDate())
          .lte("created_at", getTodayDate());
        break;
      case "last-week":
        query
          .gte("created_at", getLastWeekDate())
          .lte("created_at", getTodayDate());
        break;
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
