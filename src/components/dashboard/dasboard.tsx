import { TaskForm } from "../task-form";
import { TaskList } from "../task-list";
import classes from "./dashboard.module.css";
import { useGetTasks } from "../../hooks/use-get-tasks";
import { useState } from "react";
import { LogoutButton } from "../logout-button";

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
      <section className={classes.profile}>
        <span>avatar</span>
        <LogoutButton />
      </section>
      <nav className={classes.menu}>
        <ul>
          <li className={classes.selected}>
            <a href="">Today</a>
          </li>
          <li>
            <a href="">Closed yesterday</a>
          </li>
          <li>
            <a href="">Closed last week</a>
          </li>
        </ul>
        <ul>
          <li>
            <a onClick={() => setMode("open-tasks")} href="">
              Open
            </a>
          </li>
          <li>
            <a onClick={() => setMode("closed-tasks")} href="">
              Closed
            </a>
          </li>
          <li>
            <a href="">Deleted</a>
          </li>
        </ul>
      </nav>
      <div className={classes.content}>
        {mode === "open-tasks" ? (
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
      </div>
    </main>
  );
};
