import { useClient } from "../../context/clientContext";

export const LogoutButton = (): JSX.Element => {
  const client = useClient();

  const handleLogout = async () => {
    client.auth.signOut().catch(console.error);
  };

  return <button onClick={handleLogout}>Logout</button>;
};
