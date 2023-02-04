import { Dashboard } from "./components/dashboard";
import { Login } from "./components/login";
import { useSession } from "./hooks/useSession";
import { LogoutButton } from "./components/logout-button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App = () => {
  const session = useSession();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
