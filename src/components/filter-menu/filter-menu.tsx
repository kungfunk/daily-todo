import classes from "./filter-menu.module.css";

export type Filters =
  | "today"
  | "yesterday"
  | "last-week"
  | "open"
  | "closed"
  | "deleted";

interface FilterMenuProps {
  activeFilter: Filters;
  filterCallback: (filter: Filters) => void;
}

export const FilterMenu = ({
  activeFilter,
  filterCallback,
}: FilterMenuProps) => {
  return (
    <nav className={classes.menu}>
      <ul>
        <li className={activeFilter === "today" ? classes.selected : ""}>
          <a href="">Today</a>
        </li>
        <li className={activeFilter === "yesterday" ? classes.selected : ""}>
          <a href="">Closed yesterday</a>
        </li>
        <li className={activeFilter === "last-week" ? classes.selected : ""}>
          <a href="">Closed last week</a>
        </li>
      </ul>
      <ul>
        <li className={activeFilter === "open" ? classes.selected : ""}>
          <a onClick={() => filterCallback("open")} href="">
            Open
          </a>
        </li>
        <li className={activeFilter === "closed" ? classes.selected : ""}>
          <a onClick={() => filterCallback("closed")} href="">
            Closed
          </a>
        </li>
        <li className={activeFilter === "deleted" ? classes.selected : ""}>
          <a href="">Deleted</a>
        </li>
      </ul>
    </nav>
  );
};
