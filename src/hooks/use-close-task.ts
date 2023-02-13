import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Database } from "../lib/database.types";

export const useCloseTask = () => {
  const client = useSupabaseClient<Database>();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (slug: string) => {
      const date = new Date(Date.now()).toISOString();
      return client
        .from("tasks")
        .update({ is_closed: true, closed_at: date })
        .eq("slug", slug);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
};
