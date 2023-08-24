import styled from "styled-components";
import { ColorBadgeProps } from "./ColorBadge.types.tsx";

export const Badge = styled.div<ColorBadgeProps>`
  background-color: ${(props) => props.type};
  padding: 5px 12px;
  color: #fff;
  font-size: 14px;
  border-radius: 3px;
`;
