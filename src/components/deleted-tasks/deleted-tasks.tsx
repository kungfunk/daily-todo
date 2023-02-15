import { useGetTasks } from "../../hooks/use-get-tasks";
import { TaskView } from "../task-view";

export const DeletedTasks = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasks("deleted");

  if (isError && error instanceof Error) {
    <p>{error.message}</p>;
  }

  return (
    <>
      <h1>Deleted tasks</h1>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {tasks && tasks.length > 0 ? (
            tasks.map((data) => <TaskView key={data.slug} {...data} />)
          ) : (
            <p>Nothing deleted. Yet.</p>
          )}
        </div>
      )}
    </>
  );
};
