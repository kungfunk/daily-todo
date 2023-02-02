import { supabase } from "../../lib/supabase";
import { Task } from "../../lib/types";
import { Badge } from "../badge";
import { Button } from "../button";
import classes from "./task-view.module.css";

type TaskViewProps = Pick<Task, "slug" | "description" | "type">;

export const TaskView = ({
  slug,
  description,
  type,
}: TaskViewProps): JSX.Element => {
  const handleDelete = async (slug: TaskViewProps["slug"]) => {
    await supabase.from("tasks").delete().eq("slug", slug);
  };

  return (
    <article className={classes.task}>
      <Badge>{type}</Badge>
      <p>{description}</p>
      <div>
        <Button onClick={() => handleDelete(slug)}>delete</Button>
      </div>
    </article>
  );
};
