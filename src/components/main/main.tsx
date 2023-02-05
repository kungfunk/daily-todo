import { useAuth } from "../../context/authContext";
import { Dashboard } from "../dashboard";
import { Login } from "../login";
import { LogoutButton } from "../logout-button";

export const Main = () => {
  const session = useAuth();

  return (
    <main>
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
