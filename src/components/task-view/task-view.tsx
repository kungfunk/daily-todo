import formatRelative from "date-fns/formatRelative";
import { useTasksStorage } from "../../hooks/useTasksStorage";
import { Task } from "../../lib/types";
import { Button } from "../button";
import classes from "./task-view.module.css";

export const TaskView = ({
  slug,
  description,
  created_at,
  closed_at,
  is_closed,
}: Omit<Task, "id" | "user_id">): JSX.Element => {
  const { deleteTaskMutation, closeTaskMutation } = useTasksStorage();

  const handleDelete = (slug: string) => {
    deleteTaskMutation.mutate(slug);
  };

  const handleClose = (slug: string) => {
    closeTaskMutation.mutate(slug);
  };

  const readableDatetime = (value: string | null) => {
    if (!value) {
      return "";
    }
    const taskDate = new Date(value);
    const currentDate = new Date();
    return formatRelative(taskDate, currentDate, { addSuffix: true });
  };

  return (
    <article className={classes.task}>
      <p className={classes.description} onClick={() => handleClose(slug)}>
        {description}
      </p>
      {is_closed ? (
        <div className={classes.date}>
          <span>closed </span>
          <time>{readableDatetime(closed_at)}</time>
        </div>
      ) : (
        <div className={classes.date}>
          <span>created </span>
          <time>{readableDatetime(created_at)}</time>
        </div>
      )}
      <div className={classes.actions}>
        <Button aria-label="Delete task" onClick={() => handleDelete(slug)}>
          x
        </Button>
      </div>
    </article>
  );
};
