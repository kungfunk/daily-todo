import { supabase } from "../../lib/supabase";

export const LogoutButton = (): JSX.Element => {
  const handleLogout = async () => {
    supabase.auth.signOut().catch(console.error);
  };

  return <button onClick={handleLogout}>Logout</button>;
};
