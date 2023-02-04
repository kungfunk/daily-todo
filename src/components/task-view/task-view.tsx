import { useTasksStorage } from "../../hooks/useTasksStorage";
import { Task } from "../../lib/types";
import { Button } from "../button";
import classes from "./task-view.module.css";

export const TaskView = ({ slug, description }: Partial<Task>): JSX.Element => {
  const { deleteTaskMutation } = useTasksStorage();

  const handleDelete = async (slug: string) => {
    deleteTaskMutation.mutate(slug);
  };

  return (
    <article className={classes.task}>
      <p>{description}</p>
      <div>
        <Button onClick={() => handleDelete(slug as string)}>delete</Button>
      </div>
    </article>
  );
};
