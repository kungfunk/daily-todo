import { useSession } from "../../hooks/useSession";
import { LogoutButton } from "../logout-button";
import classes from "./header.module.css";

export const Header = () => {
  const session = useSession();

  return (
    <header className={classes.header}>
      <span>Welcome back, {session?.user.email}</span>
      <LogoutButton />
    </header>
  );
};
