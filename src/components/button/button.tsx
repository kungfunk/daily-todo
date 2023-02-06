import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import classes from "./button.module.css";

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { showAsLink?: boolean }
>;

export const Button = ({
  onClick,
  type = "button",
  children,
  showAsLink = false,
}: ButtonProps): JSX.Element => {
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
