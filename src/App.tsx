import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { useSession } from "./hooks/useSession";

export const App = () => {
  const session = useSession();

  return <>{!session?.user.id ? <Login /> : <Dashboard />}</>;
};
