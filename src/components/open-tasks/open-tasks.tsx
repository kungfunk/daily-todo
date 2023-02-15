import { useGetTasks } from "../../hooks/use-get-tasks";
import { TaskForm } from "../task-form";
import { TaskView } from "../task-view";

export const OpenTasks = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasks("open");

  if (isError && error instanceof Error) {
    <p>{error.message}</p>;
  }

  return (
    <>
      <h1>Open tasks</h1>
      <TaskForm />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {tasks && tasks.length > 0 ? (
            tasks.map((data) => <TaskView key={data.slug} {...data} />)
          ) : (
            <p>No open tasks, hurray!</p>
          )}
        </div>
      )}
    </>
  );
};
