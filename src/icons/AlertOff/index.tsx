import React from "react";
import Duotone from "./Duotone";
import Light from "./Light";
import Regular from "./Regular";
import Solid from "./Solid";

export interface AlertOffIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "duotone" | "light" | "regular" | "solid";
  size?: number;
}

function AlertOffIcon({
  variant = "regular",
  size,
  ...props
}: AlertOffIconProps) {
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

export default React.memo(AlertOffIcon);

/**
 * This is generated file. Any changes will be discarded. Check package.json scripts for more information.
 */
