import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useClient } from "../context/clientContext";
import { generateSlug } from "../lib/slug";
import { useSession } from "./useSession";

export function useTasksStorage() {
  const client = useClient();
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

  const closeTaskMutation = useMutation(
    async (slug: string) => {
      return client
        .from(tasksTable)
        .update({ is_closed: true, closed_at: Date.now().toString() })
        .eq("slug", slug);
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

  const getTasksQuery = () =>
    useQuery(cacheKey, async () => {
      return client
        .from(tasksTable)
        .select("*")
        .order("created_at", { ascending: false })
        .then((result) => result.data);
    });

  return {
    getTasksQuery,
    deleteTaskMutation,
    addTaskMutation,
    closeTaskMutation,
  };
}
