import { getRelativeReadableDate } from "../../lib/date";
import classes from "./timedata.module.css";

interface TimedataProps {
  date: string | null;
  prefix?: string;
}

export const Timedata = ({ date, prefix }: TimedataProps) => {
  const readableRelativeDate = date
    ? getRelativeReadableDate(date)
    : "long time ago...";

  return (
    <span className={classes.timedate}>
      {prefix && <span>{prefix} </span>}
      <time>{readableRelativeDate}</time>
    </span>
  );
};
