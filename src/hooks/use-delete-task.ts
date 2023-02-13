import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Database } from "../lib/database.types";

export const useDeleteTask = () => {
  const client = useSupabaseClient<Database>();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (slug: string, hardDelete = false) => {
      if (!hardDelete) {
        return client
          .from("tasks")
          .update({ is_deleted: true })
          .eq("slug", slug);
      }
      return client.from("tasks").delete().eq("slug", slug);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
