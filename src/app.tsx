import { Dashboard } from "./components/dashboard";
import { Login } from "./components/login";
import { useSession } from "./hooks/useSession";
import classes from "./app.module.css";
import { LogoutButton } from "./components/logout-button";

export const App = () => {
  const session = useSession();

  return (
    <main className={classes.container}>
      {!session?.user.id ? (
        <Login />
      ) : (
        <>
          <div>
            <LogoutButton />
          </div>
          <Dashboard />
        </>
      )}
    </main>
  );
};
