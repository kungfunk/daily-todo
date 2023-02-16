import { TaskStatus, useGetTasks } from "../../hooks/use-get-tasks";
import { TaskForm } from "../task-form";
import { TaskView } from "../task-view";

type DataProps = { [key in TaskStatus]: { title: string; emptyState: string } };

const data: DataProps = {
  open: {
    title: "Open tasks",
    emptyState: "No open tasks, hurray!",
  },
  closed: {
    title: "Closed tasks",
    emptyState: "No closed tasks yet, work harder!",
  },
  deleted: {
    title: "Deleted tasks",
    emptyState: "Nothing deleted. Yet.",
  },
};

export const TaskList = ({ status }: { status: TaskStatus }) => {
  const { data: tasks, isLoading, isError, error } = useGetTasks(status);

  if (isError && error instanceof Error) {
    <p>{error.message}</p>;
  }

  return (
    <>
      <h1>{data[status].title}</h1>
      <TaskForm />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {tasks && tasks.length > 0 ? (
            tasks.map((data) => <TaskView key={data.slug} {...data} />)
          ) : (
            <p>{data[status].emptyState}</p>
          )}
        </div>
      )}
    </>
  );
};
