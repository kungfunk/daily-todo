import { Dashboard } from "../dashboard";
import { Login } from "../login";
import { useSession } from "../../hooks/useSession";
import classes from "./app.module.css";

export const App = () => {
  const session = useSession();

  return (
    <main className={classes.container}>
      {!session?.user.id ? <Login /> : <Dashboard />}
    </main>
  );
};
