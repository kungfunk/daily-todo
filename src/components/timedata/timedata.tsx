import formatRelative from "date-fns/formatRelative";
import classes from "./timedata.module.css";

interface TimedataProps {
  date: string | null;
  prefix?: string;
}

export const Timedata = ({ date, prefix }: TimedataProps) => {
  const readableDatetime = (value: string | null) => {
    if (!value) {
      return "";
    }
    const taskDate = new Date(value);
    const currentDate = new Date();
    return formatRelative(taskDate, currentDate, { addSuffix: true });
  };

  return (
    <span className={classes.timedate}>
      {prefix && <span>{prefix} </span>}
      <time>{readableDatetime(date)}</time>
    </span>
  );
};
