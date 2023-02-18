import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Database } from "../lib/database.types";
import { getCurrentTimestampz } from "../lib/date";

export const useToggleTask = () => {
  const client = useSupabaseClient<Database>();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      slug,
      isClosed,
    }: {
      slug: string;
      isClosed: boolean;
    }) => {
      const date = getCurrentTimestampz();
      return client
        .from("tasks")
        .update({ is_closed: isClosed, closed_at: isClosed ? date : null })
        .eq("slug", slug);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
};
