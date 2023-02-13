import { NavLink } from "react-router-dom";
import classes from "./filter-menu.module.css";

export const FILTERS = [
  "today",
  "yesterday",
  "last-week",
  "open",
  "closed",
  "deleted",
] as const;

export type Filters = (typeof FILTERS)[number];

export const FilterMenu = () => {
  const getNavLinkClassName = ({ isActive }: { isActive: boolean }): string =>
    isActive ? `${classes.selected} ${classes.navlink}` : classes.navlink;

  return (
    <nav className={classes.menu}>
      <ul>
        <li>
          <NavLink to="/dashboard/open" className={getNavLinkClassName}>
            Open
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/closed" className={getNavLinkClassName}>
            Closed
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/deleted" className={getNavLinkClassName}>
            Deleted
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/dashboard/history/today"
            className={getNavLinkClassName}
          >
            Today
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/history/yesterday"
            className={getNavLinkClassName}
          >
            Yesterday
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/history/last-week"
            className={getNavLinkClassName}
          >
            Last week
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
