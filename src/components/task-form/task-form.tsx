import { useState } from "react";
import { useTasksStorage } from "../../hooks/useTasksStorage";
import { Button } from "../button";

export const TaskForm = (): JSX.Element => {
  const { addTaskMutation } = useTasksStorage();
  const [description, setDescription] = useState("");

  const handleAddTask = async (e: any) => {
    e.preventDefault();

    addTaskMutation.mutate(description);
  };

  return (
    <form onSubmit={handleAddTask}>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <Button type="submit">Add task</Button>
    </form>
  );
};
