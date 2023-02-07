import { InputHTMLAttributes } from "react";
import classes from "./checkbox.module.css";

export const Checkbox = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={classes.checkbox} type="checkbox" {...props} />;
};
