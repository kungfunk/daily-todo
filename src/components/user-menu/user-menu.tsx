import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { redirect } from "react-router-dom";
import { Avatar } from "../avatar";
import { PowerOffIcon } from "../icons";
import classes from "./user-menu.module.css";

export const UserMenu = () => {
  const client = useSupabaseClient();
  const user = useUser();

  const handleLogout = async () => {
    client.auth
      .signOut()
      .then(() => redirect("/login"))
      .catch(console.error);
  };

  return (
    <section className={classes.menu}>
      <Avatar className={classes.avatar} seed={user?.email || "default"} />
      <button className={classes.logout} onClick={handleLogout}>
        <PowerOffIcon className={classes.icon} />
      </button>
    </section>
  );
};
