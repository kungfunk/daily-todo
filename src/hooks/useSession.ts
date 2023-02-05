import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useClient } from "../context/clientContext";

export const useSession = (): Session | null => {
  const [session, setSession] = useState<Session | null>(null);
  const client = useClient();

  useEffect(() => {
    client.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session);
      })
      .catch((error) => console.log(error));

    client.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session;
};
