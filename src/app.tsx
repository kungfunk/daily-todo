import { Dashboard } from "./components/dashboard";
import { Login } from "./components/login";
import { useSession } from "./hooks/useSession";
import { LogoutButton } from "./components/logout-button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/authContext";
import { ClientContext } from "./context/clientContext";
import { createSupabaseClient } from "./lib/supabase";
import { Main } from "./components/main";

export const App = () => {
  const queryClient = new QueryClient();
  const supabaseClient = createSupabaseClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ClientContext.Provider value={supabaseClient}>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </ClientContext.Provider>
    </QueryClientProvider>
  );
};
