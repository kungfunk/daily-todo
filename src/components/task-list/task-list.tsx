import { useState } from "react";
import { useAddTask } from "../../hooks/use-add-task";
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
  const { data: tasks, ...tasksQuery } = useGetTasks(group);
  const addTaskMutation = useAddTask();
  const [taskSelected, setTaskSelected] = useState("");

  if (tasksQuery.isError && tasksQuery.error instanceof Error) {
    <p>{tasksQuery.error.message}</p>;
  }

  return (
    <>
      <h1>{groupMetadata[group].title}</h1>
      <TaskForm
        isLoading={addTaskMutation.isLoading}
        isError={addTaskMutation.isError}
        error={addTaskMutation.error}
        handleSave={addTaskMutation.mutate}
      />
      {tasksQuery.isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {tasks && tasks.length > 0 ? (
            tasks.map((data) => (
              <TaskView
                key={data.slug}
                isSelected={taskSelected === data.slug}
                id={data.slug}
                description={data.description}
                date={data.is_closed ? data.closed_at : data.created_at}
                onSelect={() => setTaskSelected(data.slug)}
                state={
                  data.is_closed
                    ? "closed"
                    : data.is_deleted
                    ? "deleted"
                    : "open"
                }
              />
            ))
          ) : (
            <p>{groupMetadata[group].emptyState}</p>
          )}
        </div>
      )}
    </>
  );
};
