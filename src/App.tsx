import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { useSession } from "./hooks/useSession";

export const App = () => {
  const session = useSession();

  return <>{!session?.user.id ? <Login /> : <Dashboard />}</>;
};
