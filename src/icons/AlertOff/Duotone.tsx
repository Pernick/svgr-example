import * as React from "react";
import { SVGProps } from "react";

function SvgDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path
        d="M128.21 134.94a8 8 0 0 1 9-6.87l15.86 2.13a8 8 0 0 1 6.87 9L135.82 320H400l-25-199.94A64 64 0 0 0 311.5 64h-175A64 64 0 0 0 73 120.06L48 320h55.54Z"
        style={{
          opacity: 0.4,
        }}
      />
      <path
        d="M432 352H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16Z"
        className="duotone_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDuotone;
