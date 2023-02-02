import { ReactNode } from "react";

interface TaskListProps {
  children: ReactNode;
}

export const TaskList = ({ children }: TaskListProps): JSX.Element => {
  return <div>{children}</div>;
};
