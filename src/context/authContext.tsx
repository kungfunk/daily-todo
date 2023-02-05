import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthError, Session, User } from "@supabase/supabase-js";
import { useClient } from "./clientContext";

export const AuthContext = createContext<Session | null>(null);

export function AuthProvider({ children }: PropsWithChildren): JSX.Element {
  const client = useClient();
  const [state, setState] = useState<Session | null>(null);
  const [error, setError] = useState<AuthError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const {
        data: { session },
        error,
      } = await client.auth.getSession();
      setError(error);
      setState(session);
      setIsLoading(false);
    })();

    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    (async () => {
      client.auth.onAuthStateChange((event, session) => {
        console.log(`Supabase auth event: ${event}`, session);
        setState(session);
      });
    })();
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {isLoading ? <>loading...</> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
