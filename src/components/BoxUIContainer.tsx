import * as React from "react";
import { borders, flexBasis, space, width } from 'styled-system';
import styled from "../theme";
import { StyledSystemProps } from '../theme/theme.types';

interface Props {
  children?: React.ReactNode,
  className?: string,
}

const BoxComponent: React.SFC<Props & StyledSystemProps> = ({ className, children }) => {
  return <div className={className ? className : ""}>{children}</div>
}

export const BoxUIContainer = styled(BoxComponent)`
  ${space}
  ${width}
  ${flexBasis}
  ${borders}
`;
BoxComponent.displayName = "BoxContainer";
