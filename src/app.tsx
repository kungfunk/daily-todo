import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createSupabaseClient } from "./lib/supabase";
import { Login } from "./components/login";
import { Dashboard } from "./components/dashboard";
import { RequireAuth } from "./components/require-auth";
import { RequireAnon } from "./components/require-anon";
import ErrorPage from "./components/error-page/error-page";

const router = createBrowserRouter([
  {
    index: true,
    errorElement: <ErrorPage />,
    element: <Navigate to="/dashboard/open" />,
  },
  {
    path: "dashboard",
    element: <Navigate to="/dashboard/open" />,
  },
  {
    path: "dashboard/:group",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: (
      <RequireAnon>
        <Login />
      </RequireAnon>
    ),
  },
]);

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const supabaseClient = createSupabaseClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider supabaseClient={supabaseClient}>
        <RouterProvider router={router} />
      </SessionContextProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};
