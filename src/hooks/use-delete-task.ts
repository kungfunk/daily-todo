import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Database } from "../lib/database.types";

export const useDeleteTask = () => {
  const client = useSupabaseClient<Database>();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (slug: string) => {
      return client.from("tasks").delete().eq("slug", slug);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks-open"] });
    },
  });
};
