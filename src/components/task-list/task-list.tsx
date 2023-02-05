import { PropsWithChildren } from "react";
import { Task } from "../../lib/types";
import { Button } from "../button";
import { TaskView } from "../task-view";

interface TaskListProps {
  title: string;
  tasks: Task[] | undefined;
  buttonHandle: VoidFunction;
  buttonText: string;
  emptyTasksMessage: string;
}

export const TaskList = ({
  title,
  tasks,
  buttonHandle,
  buttonText,
  emptyTasksMessage,
}: TaskListProps) => {
  return (
    <>
      <div>
        <Button showAsLink={true} onClick={buttonHandle}>
          {buttonText}
        </Button>
      </div>
      <h1>{title}</h1>
      <div>
        {tasks ? (
          tasks.map((data) => <TaskView key={data.slug} {...data} />)
        ) : (
          <p>{emptyTasksMessage}</p>
        )}
      </div>
    </>
  );
};
