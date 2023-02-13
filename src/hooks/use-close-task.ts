import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Database } from "../lib/database.types";

export const useCloseTask = () => {
  const client = useSupabaseClient<Database>();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (slug: string) => {
      return client
        .from("tasks")
        .update({ is_closed: true, closed_at: Date.now().toString() })
        .eq("slug", slug);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks-open", "tasks-closed"],
      });
    },
  });
};
