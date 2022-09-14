import React from "react";
import Duotone from "./Duotone";
import Light from "./Light";
import Regular from "./Regular";
import Solid from "./Solid";

export interface AlertOnIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "duotone" | "light" | "regular" | "solid";
  size?: number;
}

function AlertOnIcon({
  variant = "regular",
  size,
  ...props
}: AlertOnIconProps) {
  const dimensions =
    typeof size === "undefined" ? undefined : { width: size, height: size };

  switch (variant) {
    case "duotone":
      return <Duotone {...dimensions} {...props} />;
    case "light":
      return <Light {...dimensions} {...props} />;
    case "solid":
      return <Solid {...dimensions} {...props} />;
    default:
      return <Regular {...dimensions} {...props} />;
  }
}

export default React.memo(AlertOnIcon);

/**
 * This is generated file. Any changes will be discarded. Check package.json scripts for more information.
 */
