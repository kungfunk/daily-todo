import { useSupabaseClient } from "@supabase/auth-helpers-react";
import classes from "./user-menu.module.css";

export const UserMenu = () => {
  const client = useSupabaseClient();

  const handleLogout = async () => {
    client.auth.signOut().catch(console.error);
  };

  return (
    <section className={classes.menu}>
      <span>avatar</span>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};
