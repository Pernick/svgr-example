import * as React from "react";
import { SVGProps } from "react";

function SvgRegular(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="m416 336-22.12-208.93A72 72 0 0 0 322.44 64H125.56a72 72 0 0 0-71.44 63.07L32 336a32 32 0 0 0-32 32v80a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32v-80a32 32 0 0 0-32-32ZM101.75 133a24 24 0 0 1 23.81-21h196.88a24 24 0 0 1 23.82 21l21.37 203H156.09l19.84-180.82a8 8 0 0 0-6.87-9l-15.86-2.13a7.79 7.79 0 0 0-1.07-.07 8 8 0 0 0-7.92 6.94L123.8 336H80.37ZM400 432H48v-48h352Z" />
    </svg>
  );
}

export default SvgRegular;
