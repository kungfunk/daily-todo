import { useToggleTask } from "../../hooks/use-toggle-task";
import { useDeleteTask } from "../../hooks/use-delete-task";
import { Task } from "../../lib/types";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { Timedata } from "../timedata";
import classes from "./task-view.module.css";
import { useState } from "react";
import { TrashIcon } from "../icons/trash-icon";

export const TaskView = ({
  slug,
  description,
  created_at,
  closed_at,
  is_closed,
  is_deleted,
}: Omit<Task, "id" | "user_id">): JSX.Element => {
  const closeTaskMutation = useToggleTask();
  const deleteTaskMutation = useDeleteTask();
  const [checked, setChecked] = useState(is_closed);

  const timedata = {
    prefix: is_closed ? "Closed" : "Published",
    date: is_closed ? closed_at : created_at,
  };

  const handleDelete = (slug: string) => {
    deleteTaskMutation.mutate(slug);
  };

  const handleToggle = (slug: string) => {
    setChecked(!checked);
    closeTaskMutation.mutate({ slug, isClosed: !checked });
  };

  return (
    <article className={classes.task}>
      <Checkbox checked={checked} onChange={() => handleToggle(slug)} />
      <div>
        <p
          className={`${classes.description} ${
            is_closed ? classes.closed : ""
          }`}
        >
          {description}
        </p>
        <footer className={classes.footer}>
          <Timedata {...timedata} />
          <div className={classes.actions}>
            {!is_deleted && (
              <Button showAsLink={true} onClick={() => handleDelete(slug)}>
                <TrashIcon /> Delete
              </Button>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
};
