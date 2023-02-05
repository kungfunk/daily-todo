import { TaskForm } from "../task-form";
import { TaskList } from "../task-list";
import classes from "./dashboard.module.css";
import { useTasksStorage } from "../../hooks/useTasksStorage";
import { useState } from "react";

export const Dashboard = () => {
  const { getTasksQuery } = useTasksStorage();
  const { data: tasks, isLoading, isError } = getTasksQuery();
  const [mode, setMode] = useState<"open-tasks" | "closed-tasks">("open-tasks");

  const openTasks = tasks?.filter(({ is_closed }) => !is_closed);
  const closedTasks = tasks?.filter(({ is_closed }) => is_closed);

  if (isLoading) {
    return <span>loading...</span>;
  }

  return (
    <div className={classes.dashboard}>
      {mode === "open-tasks" ? (
        <>
          <TaskList
            title="Current tasks"
            tasks={openTasks}
            buttonHandle={() => setMode("closed-tasks")}
            buttonText="show closed tasks →"
            emptyTasksMessage="No open tasks, hurray!"
          />
          <TaskForm />
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
    </div>
  );
};
