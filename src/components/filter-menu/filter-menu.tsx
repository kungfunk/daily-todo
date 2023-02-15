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
            <img className={classes.icon} src="/envelope-open-text.svg" />
            Open
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/closed" className={getNavLinkClassName}>
            <img className={classes.icon} src="/checkbox.svg" />
            Closed
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/deleted" className={getNavLinkClassName}>
            <img className={classes.icon} src="/trash.svg" />
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
            <img className={classes.icon} src="/calendar-day.svg" />
            Today
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/history/yesterday"
            className={getNavLinkClassName}
          >
            <img className={classes.icon} src="/time-twenty-four.svg" />
            Yesterday
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/history/last-week"
            className={getNavLinkClassName}
          >
            <img className={classes.icon} src="/calendar-week.svg" />
            Last week
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
