import { useCloseTask } from "../../hooks/use-close-task";
import { useDeleteTask } from "../../hooks/use-delete-task";
import { Task } from "../../lib/types";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { Timedata } from "../timedata";
import classes from "./task-view.module.css";

export const TaskView = ({
  slug,
  description,
  created_at,
  closed_at,
  is_closed,
}: Omit<Task, "id" | "user_id">): JSX.Element => {
  const closeTaskMutation = useCloseTask();
  const deleteTaskMutation = useDeleteTask();

  const handleDelete = (slug: string) => {
    deleteTaskMutation.mutate(slug);
  };

  const handleClose = (slug: string) => {
    closeTaskMutation.mutate(slug);
  };

  return (
    <article className={classes.task}>
      <Checkbox onClick={() => handleClose(slug)} />
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
