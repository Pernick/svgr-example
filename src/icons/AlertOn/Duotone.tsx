import * as React from "react";
import { SVGProps } from "react";

function SvgDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path
        d="M224.21 134.94a8 8 0 0 1 9-6.87l15.86 2.13a8 8 0 0 1 6.87 9L231.82 320H496l-25-199.94A64 64 0 0 0 407.5 64h-175a64 64 0 0 0-63.5 56.06L144 320h55.54Z"
        style={{
          opacity: 0.4,
        }}
      />
      <path
        d="M528 352H112a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16ZM112 192a24 24 0 0 0-24-24H24a24 24 0 0 0 0 48h64a24 24 0 0 0 24-24Zm504-24h-64a24 24 0 0 0 0 48h64a24 24 0 0 0 0-48ZM90.69 76a24 24 0 1 0 26.62-39.92l-48-32A24 24 0 1 0 42.69 44ZM536 80a23.87 23.87 0 0 0 13.29-4l48-32a24 24 0 1 0-26.6-39.94l-48 32A24 24 0 0 0 536 80Z"
        className="duotone_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDuotone;
