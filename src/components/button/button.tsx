import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({
  onClick,
  type,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};
