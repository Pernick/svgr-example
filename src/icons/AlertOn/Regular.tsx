import * as React from "react";
import { SVGProps } from "react";

function SvgRegular(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M90.69 76a24 24 0 1 0 26.62-39.92l-48-32A24 24 0 1 0 42.69 44ZM536 80a23.87 23.87 0 0 0 13.29-4l48-32a24 24 0 1 0-26.6-39.94l-48 32A24 24 0 0 0 536 80ZM112 192a24 24 0 0 0-24-24H24a24 24 0 0 0 0 48h64a24 24 0 0 0 24-24Zm504-24h-64a24 24 0 0 0 0 48h64a24 24 0 0 0 0-48ZM512 336l-22.12-208.93A72 72 0 0 0 418.44 64H221.56a72 72 0 0 0-71.44 63.07L128 336a32 32 0 0 0-32 32v80a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32v-80a32 32 0 0 0-32-32ZM197.75 133a24 24 0 0 1 23.81-21h196.88a24 24 0 0 1 23.82 21l21.37 203H252.09l19.84-180.82a8 8 0 0 0-6.87-9l-15.86-2.13a7.79 7.79 0 0 0-1.07-.07 8 8 0 0 0-7.92 6.94L219.8 336h-43.43ZM496 432H144v-48h352Z" />
    </svg>
  );
}

export default SvgRegular;
