import { PropsWithChildren } from "react";
import classes from "./badge.module.css";

export const Badge = ({ children }: PropsWithChildren): JSX.Element => {
  return <span className={classes.badge}>{children}</span>;
};
