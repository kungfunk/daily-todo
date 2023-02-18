import { ImgHTMLAttributes } from "react";
import classes from "./icon.module.css";

export const SaveIcon = (props: ImgHTMLAttributes<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`${classes.icon} ${props.className}`}
    fill="currentColor"
  >
    <path d="M12,10a4,4,0,1,0,4,4A4,4,0,0,0,12,10Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,16Z" />
    <path d="M22.536,4.122,19.878,1.464A4.966,4.966,0,0,0,16.343,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7.657A4.966,4.966,0,0,0,22.536,4.122ZM17,2.08V3a3,3,0,0,1-3,3H10A3,3,0,0,1,7,3V2h9.343A2.953,2.953,0,0,1,17,2.08ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2V3a5.006,5.006,0,0,0,5,5h4a4.991,4.991,0,0,0,4.962-4.624l2.16,2.16A3.02,3.02,0,0,1,22,7.657Z" />
  </svg>
);
