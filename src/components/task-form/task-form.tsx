import {
  FormEvent,
  ForwardedRef,
  forwardRef,
  KeyboardEvent,
  useState,
} from "react";
import classes from "./task-form.module.css";

interface TaskFormProps {
  children?: string;
  handleSave: (description: string) => void;
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
}

export const TaskForm = forwardRef(
  (
    { children = "", handleSave, isLoading, isError, error }: TaskFormProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const [description, setDescription] = useState(children);
    const [textRows, setTextRows] = useState(1);

    const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      handleSave(description);
      setDescription("");
    };

    const handleEnterKey = (e: KeyboardEvent<HTMLFormElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();

        handleSave(description);
        setDescription("");
      }
    };

    return (
      <form onSubmit={handleOnSubmit} onKeyDown={handleEnterKey}>
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
          ref={ref}
        ></textarea>
      </form>
    );
  }
);
