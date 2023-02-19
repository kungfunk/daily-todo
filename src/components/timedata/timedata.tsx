import format from "date-fns/format";
import { getDateTime, getRelativeReadableDate } from "../../lib/date";
import classes from "./timedata.module.css";

interface TimedataProps {
  date: string | null;
  prefix?: string;
}

export const Timedata = ({ date, prefix }: TimedataProps) => {
  const readableRelativeDate = date
    ? getRelativeReadableDate(date)
    : "long time ago...";

  const dateTime = getDateTime(date || Date.now().toString());
  return (
    <span className={classes.timedate}>
      {prefix && <span>{prefix} </span>}
      <time dateTime={dateTime} title={dateTime}>
        {readableRelativeDate}
      </time>
    </span>
  );
};
