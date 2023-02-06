import { useTasksStorage } from "../../hooks/useTasksStorage";
import { Task } from "../../lib/types";
import { Button } from "../button";
import { Timedata } from "../timedata";
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

  return (
    <article className={classes.task}>
      <input
        className={classes.check}
        type="checkbox"
        onClick={() => handleClose(slug)}
      />
      <div>
        <p className={classes.description}>{description}</p>
        <footer className={classes.footer}>
          {is_closed ? (
            <Timedata prefix="Closed" date={closed_at} />
          ) : (
            <>
              <Timedata prefix="Published" date={created_at} />
              <div className={classes.actions}>
                <Button showAsLink={true} onClick={() => handleDelete(slug)}>
                  Delete
                </Button>
              </div>
            </>
          )}
        </footer>
      </div>
    </article>
  );
};
