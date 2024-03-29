import { ImgHTMLAttributes } from "react";
import classes from "./icon.module.css";

export const CalendarWeekIcon = (props: ImgHTMLAttributes<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`${classes.icon} ${props.className}`}
    fill="currentColor"
  >
    <path d="m18,12H6c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h12c1.103,0,2-.897,2-2v-2c0-1.103-.897-2-2-2Zm-12,4v-2h12v2s-12,0-12,0ZM19,2h-1v-1c0-.552-.447-1-1-1s-1,.448-1,1v1h-8v-1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-14,2h14c1.654,0,3,1.346,3,3v1H2v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3v-9h20v9c0,1.654-1.346,3-3,3Z" />
  </svg>
);
