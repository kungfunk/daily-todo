import { useAuth } from "../../context/authContext";
import { Dashboard } from "../dashboard";
import { Header } from "../header";
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
          <Header />
          <Dashboard />
        </>
      )}
    </main>
  );
};
