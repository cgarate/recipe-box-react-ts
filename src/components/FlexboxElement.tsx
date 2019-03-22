import * as React from "react";
import {
  alignSelf,
  borders,
  flexBasis,
  justifySelf,
  order,
  space,
  width,
} from "styled-system";
import styled from "../theme";
import { StyledSystemProps } from "../theme/theme.types";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const FlexboxComponentElement: React.SFC<Props & StyledSystemProps> = ({
  className,
  children,
}) => {
  return <div className={className ? className : ""}>{children}</div>;
};

export const FlexboxElement = styled(FlexboxComponentElement)`
  ${space}
  ${width}
  ${flexBasis}
  ${justifySelf}
  ${alignSelf}
  ${order}
  ${borders}
`;
FlexboxComponentElement.displayName = "FlexboxElement";
