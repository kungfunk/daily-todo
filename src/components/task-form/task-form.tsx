import { FormEvent, KeyboardEvent, useState } from "react";
import { useTasksStorage } from "../../hooks/useTasksStorage";
import classes from "./task-form.module.css";

export const TaskForm = (): JSX.Element => {
  const { addTaskMutation } = useTasksStorage();
  const [description, setDescription] = useState("");
  const [textRows, setTextRows] = useState(1);

  const handleAddTask = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTaskMutation.mutate(description);
    setDescription("");
  };

  const handleEnterKey = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      addTaskMutation.mutate(description);
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleAddTask} onKeyDown={handleEnterKey}>
      <textarea
        className={classes.text}
        id="description"
        name="description"
        placeholder="Type your task here. Press enter to save."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={textRows}
        onFocus={() => setTextRows(3)}
        onBlur={() => setTextRows(1)}
      ></textarea>
    </form>
  );
};
