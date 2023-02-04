import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useSupabase } from "./useSupabase";

export const useSession = (): Session | null => {
  const [session, setSession] = useState<Session | null>(null);
  const client = useSupabase();

  useEffect(() => {
    client.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    client.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session;
};
