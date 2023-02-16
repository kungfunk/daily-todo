import { ImgHTMLAttributes } from "react";
import classes from "./icon.module.css";

export const TrashIcon = (props: ImgHTMLAttributes<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`${classes.icon} ${props.className}`}
    fill="currentColor"
  >
    <g>
      <path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z" />
      <rect x="9" y="10" width="2" height="8" />
      <rect x="13" y="10" width="2" height="8" />
    </g>
  </svg>
);
