import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { generateSlug } from "../lib/slug";
import { useSession } from "./useSession";
import { useSupabase } from "./useSupabase";

export function useTasksStorage() {
  const client = useSupabase();
  const queryClient = useQueryClient();
  const session = useSession();

  const cacheKey = ["tasks"];
  const tasksTable = "tasks";

  const deleteTaskMutation = useMutation(
    async (slug: string) => {
      return client
        .from(tasksTable)
        .delete()
        .eq("slug", slug)
        .then((result) => result.data);
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(cacheKey);
      },
    }
  );

  const addTaskMutation = useMutation(
    async (description: string) => {
      return client.from(tasksTable).insert({
        description: description,
        is_closed: false,
        user_id: session!.user.id,
        slug: generateSlug(),
      });
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(cacheKey);
      },
    }
  );

  const getOpenTasksQuery = () =>
    useQuery(cacheKey, async () => {
      return client
        .from(tasksTable)
        .select("*")
        .eq("is_closed", false)
        .then((result) => result.data);
    });

  return { getOpenTasksQuery, deleteTaskMutation, addTaskMutation };
}
