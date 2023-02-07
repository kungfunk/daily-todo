import { useAuth } from "../../context/authContext";
import { Dashboard } from "../dashboard";
import { Header } from "../header";
import { Login } from "../login";

export const Main = () => {
  const session = useAuth();

  return (
    <div>
      {!session?.user.id ? (
        <Login />
      ) : (
        <>
          <Header />
          <Dashboard />
        </>
      )}
    </div>
  );
};
