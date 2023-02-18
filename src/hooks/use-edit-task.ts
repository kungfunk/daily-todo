import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Database } from "../lib/database.types";

export const useEditTask = () => {
  const client = useSupabaseClient<Database>();
  const queryClient = useQueryClient();
  const user = useUser();

  return useMutation({
    mutationFn: async ({
      slug,
      description,
    }: {
      slug: string;
      description: string;
    }) => {
      if (!user) {
        throw new Error("Not logged in");
      }

      return client
        .from("tasks")
        .update({
          description: description,
        })
        .eq("slug", slug);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
};
