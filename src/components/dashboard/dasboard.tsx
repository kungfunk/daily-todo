import { TaskForm } from "../task-form";
import { TaskList } from "../task-list";
import classes from "./dashboard.module.css";
import { useGetTasks } from "../../hooks/use-get-tasks";
import { useState } from "react";
import { UserMenu } from "../user-menu";
import { FilterMenu, Filters } from "../filter-menu";

export const Dashboard = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasks();
  const [mode, setMode] = useState<Filters>("open");

  const openTasks = tasks?.filter(({ is_closed }) => !is_closed);
  const closedTasks = tasks?.filter(({ is_closed }) => is_closed);

  if (isError && error instanceof Error) {
    <p>{error.message}</p>;
  }

  return (
    <main className={classes.dashboard}>
      <UserMenu />
      <FilterMenu activeFilter={mode} filterCallback={setMode} />
      <div className={classes.content}>
        {/* <Outlet /> aqui */}
        {isLoading ? (
          <span>loading...</span>
        ) : (
          <>
            {mode === "open" ? (
              <>
                <h1>Current tasks</h1>
                <TaskForm />
                <TaskList
                  tasks={openTasks}
                  emptyTasksMessage="No open tasks, hurray!"
                />
              </>
            ) : (
              <>
                <h1>History</h1>
                <TaskList
                  tasks={closedTasks}
                  emptyTasksMessage="No closed tasks yet, work harder!"
                />
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
};
