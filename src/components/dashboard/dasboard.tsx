import classes from "./dashboard.module.css";
import { UserMenu } from "../user-menu";
import { FilterMenu } from "../filter-menu";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <main className={classes.dashboard}>
      <UserMenu />
      <FilterMenu />
      <div className={classes.content}>
        <Outlet />
      </div>
    </main>
  );
};
