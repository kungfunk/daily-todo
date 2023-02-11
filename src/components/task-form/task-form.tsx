import { FormEvent, KeyboardEvent, useState } from "react";
import { useAddTask } from "../../hooks/use-add-task";
import classes from "./task-form.module.css";

export const TaskForm = (): JSX.Element => {
  const { mutate, isLoading, isError, error } = useAddTask();
  const [description, setDescription] = useState("");
  const [textRows, setTextRows] = useState(1);

  const handleAddTask = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(description);
    setDescription("");
  };

  const handleEnterKey = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      mutate(description);
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleAddTask} onKeyDown={handleEnterKey}>
      {isError && error instanceof Error && <p>{error.message}</p>}
      <textarea
        className={classes.text}
        disabled={isLoading}
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
