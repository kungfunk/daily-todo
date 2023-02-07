import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createSupabaseClient } from "./lib/supabase";
import { Login } from "./components/login";
import { Dashboard } from "./components/dashboard";
import { RequireAuth } from "./components/require-auth";
import { RequireAnon } from "./components/require-anon";

export const App = () => {
  const queryClient = new QueryClient();
  const supabaseClient = createSupabaseClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider supabaseClient={supabaseClient}>
        <Routes>
          <Route
            index
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={
              <RequireAnon>
                <Login />
              </RequireAnon>
            }
          />
        </Routes>
      </SessionContextProvider>
    </QueryClientProvider>
  );
};
