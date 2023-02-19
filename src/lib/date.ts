import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";
import subDays from "date-fns/subDays";

export function getCurrentTimestampz() {
  return new Date(Date.now()).toISOString();
}

export function getTodayDate() {
  return format(new Date(), "yyyy/MM/dd");
}

export function getYesterdayDate() {
  return format(subDays(new Date(), 1), "yyyy/MM/dd");
}

export function getLastWeekDate() {
  return format(subDays(new Date(), 7), "yyyy/MM/dd");
}

export function getRelativeReadableDate(value: string) {
  const taskDate = new Date(value);
  const currentDate = new Date();
  return formatDistance(taskDate, currentDate, { addSuffix: true });
}

export function getDateTime(value: string) {
  return format(new Date(value), "yyyy-MM-dd hh:mm:ss.SSS");
}
