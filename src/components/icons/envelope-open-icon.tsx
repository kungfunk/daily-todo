import { ImgHTMLAttributes } from "react";
import classes from "./icon.module.css";

export const EnvelopeOpenIcon = (props: ImgHTMLAttributes<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`${classes.icon} ${props.className}`}
  >
    <path d="M7,6c0-.552,.448-1,1-1h8c.553,0,1,.448,1,1s-.447,1-1,1H8c-.552,0-1-.448-1-1Zm1,5h6c.553,0,1-.448,1-1s-.447-1-1-1h-6c-.552,0-1,.448-1,1s.448,1,1,1Zm16,1.708v6.292c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-6.292c0-1.356,.562-2.673,1.541-3.611l1.459-1.398v-3.699C3,1.794,4.794,0,7,0h10c2.206,0,4,1.794,4,4v3.699l1.459,1.397c.979,.938,1.541,2.254,1.541,3.611ZM5,4V12.243l4.878,4.879c1.134,1.133,3.11,1.133,4.243,0l4.879-4.879V4c0-1.103-.897-2-2-2H7c-1.103,0-2,.897-2,2ZM22,12.708c0-.195-.02-.389-.058-.579l-6.407,6.407c-.944,.944-2.199,1.464-3.535,1.464s-2.591-.52-3.536-1.464L2.058,12.128c-.038,.19-.058,.384-.058,.579v6.292c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3v-6.292Z" />
  </svg>
);
