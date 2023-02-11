import { TaskForm } from "../task-form";
import { TaskList } from "../task-list";
import classes from "./dashboard.module.css";
import { useGetTasks } from "../../hooks/use-get-tasks";
import { useState } from "react";

export const Dashboard = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasks();
  const [mode, setMode] = useState<"open-tasks" | "closed-tasks">("open-tasks");

  const openTasks = tasks?.filter(({ is_closed }) => !is_closed);
  const closedTasks = tasks?.filter(({ is_closed }) => is_closed);

  if (isLoading) {
    return <span>loading...</span>;
  }

  if (isError && error instanceof Error) {
    <p>{error.message}</p>;
  }

  return (
    <main className={classes.dashboard}>
      {mode === "open-tasks" ? (
        <>
          <TaskForm />
          <TaskList
            title="Current tasks"
            tasks={openTasks}
            buttonHandle={() => setMode("closed-tasks")}
            buttonText="show closed tasks →"
            emptyTasksMessage="No open tasks, hurray!"
          />
        </>
      ) : (
        <TaskList
          title="History"
          tasks={closedTasks}
          buttonHandle={() => setMode("open-tasks")}
          buttonText="← show open tasks"
          emptyTasksMessage="No closed tasks yet, work harder!"
        />
      )}
    </main>
  );
};
