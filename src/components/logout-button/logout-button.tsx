import { useSupabase } from "../../hooks/useSupabase";

export const LogoutButton = (): JSX.Element => {
  const client = useSupabase();

  const handleLogout = async () => {
    client.auth.signOut().catch(console.error);
  };

  return <button onClick={handleLogout}>Logout</button>;
};
