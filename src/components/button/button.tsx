import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import classes from "./button.module.css";

export const Button = ({
  onClick,
  type = "button",
  children,
  showAsLink = false,
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { showAsLink?: boolean }
>): JSX.Element => {
  return (
    <button
      className={showAsLink ? classes.button_as_link : classes.button}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
