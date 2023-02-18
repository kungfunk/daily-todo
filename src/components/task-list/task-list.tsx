import { TaskGroups, useGetTasks } from "../../hooks/use-get-tasks";
import { TaskForm } from "../task-form";
import { TaskView } from "../task-view";

type DataProps = { [key in TaskGroups]: { title: string; emptyState: string } };

const groupMetadata: DataProps = {
  today: {
    title: "Today",
    emptyState: "Nothing yet.",
  },
  yesterday: {
    title: "Yesterday",
    emptyState: "Nothing to see.",
  },
  "last-week": {
    title: "Last week",
    emptyState: "Nothing to see.",
  },
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

export const TaskList = ({ group }: { group: TaskGroups }) => {
  const { data: tasks, isLoading, isError, error } = useGetTasks(group);

  if (isError && error instanceof Error) {
    <p>{error.message}</p>;
  }

  return (
    <>
      <h1>{groupMetadata[group].title}</h1>
      <TaskForm />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {tasks && tasks.length > 0 ? (
            tasks.map((data) => <TaskView key={data.slug} {...data} />)
          ) : (
            <p>{groupMetadata[group].emptyState}</p>
          )}
        </div>
      )}
    </>
  );
};
