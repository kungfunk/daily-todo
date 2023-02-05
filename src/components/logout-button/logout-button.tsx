import { useClient } from "../../context/clientContext";
import { Button } from "../button";

export const LogoutButton = (): JSX.Element => {
  const client = useClient();

  const handleLogout = async () => {
    client.auth.signOut().catch(console.error);
  };

  return (
    <Button showAsLink={true} onClick={handleLogout}>
      Logout
    </Button>
  );
};
