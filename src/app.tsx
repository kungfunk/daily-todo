import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createSupabaseClient } from "./lib/supabase";
import { Login } from "./components/login";
import { Dashboard } from "./components/dashboard";
import { RequireAuth } from "./components/require-auth";
import { RequireAnon } from "./components/require-anon";
import ErrorPage from "./components/error-page/error-page";
import { TaskList } from "./components/task-list";

const router = createBrowserRouter([
  {
    index: true,
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      {
        path: "open",
        element: <TaskList status="open" />,
      },
      {
        path: "closed",
        element: <TaskList status="closed" />,
      },
      {
        path: "deleted",
        element: <TaskList status="deleted" />,
      },
    ],
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
  const queryClient = new QueryClient();
  const supabaseClient = createSupabaseClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider supabaseClient={supabaseClient}>
        <RouterProvider router={router} />
      </SessionContextProvider>
    </QueryClientProvider>
  );
};
