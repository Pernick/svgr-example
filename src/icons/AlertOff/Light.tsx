import * as React from "react";
import { SVGProps } from "react";

function SvgLight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M416 320h-1.88l-23.24-185.92A80.13 80.13 0 0 0 311.5 64h-175a80.13 80.13 0 0 0-79.38 70.08L33.88 320H32a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32ZM88.88 138.05A48.07 48.07 0 0 1 136.5 96h175a48.07 48.07 0 0 1 47.62 42.05l22.76 182H135.82l24.11-180.82a8 8 0 0 0-6.87-9l-15.86-2.13a8 8 0 0 0-9 6.87L103.54 320H66.12ZM416 416H32v-64h384Z" />
    </svg>
  );
}

export default SvgLight;
