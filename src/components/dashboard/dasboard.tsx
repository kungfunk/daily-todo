import { TaskView } from "../task-view";
import { TaskForm } from "../task-form";
import { TaskList } from "../task-list";
import classes from "./dashboard.module.css";
import { useTasksStorage } from "../../hooks/useTasksStorage";

export const Dashboard = () => {
  const { getTasksQuery } = useTasksStorage();
  const { data: tasks, isLoading, isError } = getTasksQuery();

  const openTasks = tasks?.filter(({ is_closed }) => !is_closed);
  const closedTasks = tasks?.filter(({ is_closed }) => is_closed);

  if (isLoading) {
    return <span>loading...</span>;
  }

  return (
    <div className={classes.dashboard}>
      <h1>Current tasks</h1>
      <TaskList>
        {openTasks ? (
          openTasks.map(({ slug, description, created_at }) => (
            <TaskView
              key={slug}
              slug={slug}
              description={description}
              created_at={created_at}
            />
          ))
        ) : (
          <p>No open tasks, hurray!</p>
        )}
      </TaskList>
      <TaskForm />
      <h2>Closed tasks</h2>
      <TaskList>
        {closedTasks ? (
          closedTasks.map(({ slug, description }) => (
            <TaskView key={slug} slug={slug} description={description} />
          ))
        ) : (
          <p>No closed tasks yet, work harder!</p>
        )}
      </TaskList>
    </div>
  );
};
