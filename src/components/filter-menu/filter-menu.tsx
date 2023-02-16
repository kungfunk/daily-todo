import { NavLink } from "react-router-dom";
import {
  EnvelopeOpenIcon,
  CheckboxIcon,
  TrashIcon,
  TimeTwentyFourIcon,
  CalendarDayIcon,
  CalendarWeekIcon,
} from "../icons";
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
            <EnvelopeOpenIcon className={classes.icon} />
            Open
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/closed" className={getNavLinkClassName}>
            <CheckboxIcon className={classes.icon} />
            Closed
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/deleted" className={getNavLinkClassName}>
            <TrashIcon className={classes.icon} />
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
            <CalendarDayIcon className={classes.icon} />
            Today
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/history/yesterday"
            className={getNavLinkClassName}
          >
            <TimeTwentyFourIcon className={classes.icon} />
            Yesterday
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/history/last-week"
            className={getNavLinkClassName}
          >
            <CalendarWeekIcon className={classes.icon} />
            Last week
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
