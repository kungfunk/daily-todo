import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button } from "../button";

export const LogoutButton = (): JSX.Element => {
  const client = useSupabaseClient();

  const handleLogout = async () => {
    client.auth.signOut().catch(console.error);
  };

  return (
    <Button showAsLink={true} onClick={handleLogout}>
      Logout
    </Button>
  );
};
