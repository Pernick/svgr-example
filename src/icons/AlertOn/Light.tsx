import * as React from "react";
import { SVGProps } from "react";

function SvgLight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M512 320h-1.88l-23.24-185.93A80.13 80.13 0 0 0 407.5 64h-175a80.13 80.13 0 0 0-79.38 70.08L129.88 320H128a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32ZM184.88 138a48.07 48.07 0 0 1 47.62-42h175a48.07 48.07 0 0 1 47.62 42l22.76 182H231.82l24.11-180.83a8 8 0 0 0-6.87-9l-15.86-2.13a8 8 0 0 0-9 6.87L199.54 320h-37.42ZM512 416H128v-64h384ZM80 160H16a16 16 0 0 0 0 32h64a16 16 0 0 0 0-32Zm544 0h-64a16 16 0 0 0 0 32h64a16 16 0 0 0 0-32ZM40.84 30.3l64 32a16 16 0 0 0 14.32-28.63l-64-32A16 16 0 0 0 40.84 30.3ZM528 64a16.17 16.17 0 0 0 7.16-1.69l64-32a16 16 0 0 0-14.32-28.64l-64 32A16 16 0 0 0 528 64Z" />
    </svg>
  );
}

export default SvgLight;
