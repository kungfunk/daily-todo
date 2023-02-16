import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Avatar } from "../avatar";
import { PowerOffIcon } from "../icons";
import classes from "./user-menu.module.css";

export const UserMenu = () => {
  const client = useSupabaseClient();
  const user = useUser();

  const handleLogout = async () => {
    client.auth.signOut().catch(console.error);
  };

  return (
    <section className={classes.menu}>
      <Avatar seed={user?.email || "default"} />
      <button className={classes["power-off"]} onClick={handleLogout}>
        <PowerOffIcon />
      </button>
    </section>
  );
};
