import { TaskView } from "../task-view";
import { TaskForm } from "../task-form";
import { TaskList } from "../task-list";
import classes from "./dashboard.module.css";
import { useTasksStorage } from "../../hooks/useTasksStorage";

export const Dashboard = () => {
  const { getOpenTasksQuery } = useTasksStorage();
  const { data: tasks, isLoading, isError } = getOpenTasksQuery();

  if (isLoading) {
    return <span>loading...</span>;
  }

  return (
    <div className={classes.dashboard}>
      <TaskList>
        {tasks ? (
          tasks.map(({ slug, description }) => (
            <TaskView key={slug} slug={slug} description={description} />
          ))
        ) : (
          <p>No open tasks, hurray!</p>
        )}
      </TaskList>
      <TaskForm />
    </div>
  );
};
