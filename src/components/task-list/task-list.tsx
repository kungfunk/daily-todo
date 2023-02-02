import { PropsWithChildren, ReactNode } from "react";

export const TaskList = ({ children }: PropsWithChildren): JSX.Element => {
  return <div>{children}</div>;
};
