import { Task } from "../../lib/types";
import { TaskView } from "../task-view";

interface TaskListProps {
  tasks: Task[] | undefined;
  emptyTasksMessage: string;
}

export const TaskList = ({ tasks, emptyTasksMessage }: TaskListProps) => {
  return (
    <div>
      {tasks ? (
        tasks.map((data) => <TaskView key={data.slug} {...data} />)
      ) : (
        <p>{emptyTasksMessage}</p>
      )}
    </div>
  );
};
