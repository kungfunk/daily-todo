import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export const Button = ({
  onClick,
  type,
  children,
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>): JSX.Element => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};
