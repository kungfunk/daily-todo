import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const LogoutButton = (): JSX.Element => {
  const client = useSupabaseClient();

  const handleLogout = async () => {
    client.auth.signOut().catch(console.error);
  };

  return <button onClick={handleLogout}>Logout</button>;
};
