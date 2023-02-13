import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Database } from "../lib/database.types";
import { generateSlug } from "../lib/slug";

export const useAddTask = () => {
  const client = useSupabaseClient<Database>();
  const queryClient = useQueryClient();
  const user = useUser();

  return useMutation({
    mutationFn: async (description: string) => {
      if (!user) {
        throw new Error("Not logged in");
      }

      return client.from("tasks").insert({
        description: description,
        is_closed: false,
        user_id: user.id,
        slug: generateSlug(),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks-open"] });
    },
  });
};
