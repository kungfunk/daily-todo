import { useGetClosedTasks } from "../../hooks/use-get-closed-tasks";
import { TaskView } from "../task-view";

export const ClosedTasks = () => {
  const { data: tasks, isLoading, isError, error } = useGetClosedTasks();

  if (isError && error instanceof Error) {
    <p>{error.message}</p>;
  }

  return (
    <>
      <h1>Closed tasks</h1>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {tasks && tasks.length > 0 ? (
            tasks.map((data) => <TaskView key={data.slug} {...data} />)
          ) : (
            <p>No closed tasks yet, work harder!</p>
          )}
        </div>
      )}
    </>
  );
};
