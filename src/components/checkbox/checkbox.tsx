import { InputHTMLAttributes } from "react";
import classes from "./checkbox.module.css";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = (props: CheckboxProps) => {
  return <input className={classes.checkbox} type="checkbox" {...props} />;
};
