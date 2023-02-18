import { useToggleTask } from "../../hooks/use-toggle-task";
import { useDeleteTask } from "../../hooks/use-delete-task";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { Timedata } from "../timedata";
import classes from "./task-view.module.css";
import { MouseEvent, useRef, useState } from "react";
import { TrashIcon } from "../icons/trash-icon";
import { TaskForm } from "../task-form";
import { EditIcon } from "../icons/edit-icon";
import { useEditTask } from "../../hooks/use-edit-task";

interface TaskViewProps {
  id: string;
  description: string;
  date: string | null;
  state: "open" | "closed" | "deleted";
  isSelected: boolean;
  onSelect: VoidFunction;
}

export const TaskView = ({
  id,
  description,
  date,
  state = "open",
  isSelected = false,
  onSelect,
}: TaskViewProps): JSX.Element => {
  const closeTaskMutation = useToggleTask();
  const deleteTaskMutation = useDeleteTask();
  const editTaskMutation = useEditTask();

  const isClosed = state === "closed";
  const isDeleted = state === "deleted";

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [checked, setChecked] = useState(isClosed);
  const [isEditMode, setIsEditMode] = useState(isSelected);

  const timedataPrefix = isClosed ? "Closed" : "Published";
  const taskClassName = `${classes.task} ${isSelected ? classes.selected : ""}`;
  const descriptionClassName = `${classes.description} ${
    isClosed ? classes.closed : ""
  }`;

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteTaskMutation.mutate(id);
  };

  const handleToggle = () => {
    setChecked(!checked);
    closeTaskMutation.mutate({ slug: id, isClosed: !checked });
  };

  const handleSave = (description: string) => {
    editTaskMutation.mutate({ slug: id, description });
    setIsEditMode(false);
  };

  const handleEdit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEditMode(true);
    textareaRef.current?.focus();
  };

  return (
    <article className={taskClassName} onClick={onSelect}>
      <Checkbox checked={checked} onChange={handleToggle} />
      <div>
        {isEditMode ? (
          <TaskForm
            isLoading={editTaskMutation.isLoading}
            isError={editTaskMutation.isError}
            error={editTaskMutation.error}
            handleSave={handleSave}
            ref={textareaRef}
          >
            {description}
          </TaskForm>
        ) : (
          <p className={descriptionClassName}>{description}</p>
        )}
        <footer className={classes.footer}>
          <Timedata date={date} prefix={timedataPrefix} />
          {isSelected && (
            <div className={classes.actions}>
              {!isDeleted && !isEditMode && (
                <Button showAsLink={true} onClick={handleDelete}>
                  <TrashIcon /> Delete
                </Button>
              )}
              {!isEditMode && (
                <Button showAsLink={true} onClick={handleEdit}>
                  <EditIcon /> Edit
                </Button>
              )}
            </div>
          )}
        </footer>
      </div>
    </article>
  );
};
