import { useSessionContext } from "@supabase/auth-helpers-react";
import { Navigate, useLocation } from "react-router-dom";

export function RequireAnon({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const { isLoading, session } = useSessionContext();

  if (isLoading) {
    return <>loading...</>;
  }

  if (!isLoading && session?.user) {
    return <Navigate to="/dashboard/open" state={{ from: location }} replace />;
  }
  return children;
}
