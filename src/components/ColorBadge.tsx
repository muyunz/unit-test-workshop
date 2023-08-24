import React, { PropsWithChildren } from "react";
import { ColorBadgeProps } from "./ColorBadge.types.tsx";
import { Badge } from "./ColorBadge.styled.tsx";

const ColorBadge: React.FunctionComponent<
  PropsWithChildren<ColorBadgeProps>
> = ({ type, children }) => {
  return <Badge type={type}>{children}</Badge>;
};

export default ColorBadge;
