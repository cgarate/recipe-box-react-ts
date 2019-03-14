import * as React from "react";
import { borders, flexBasis, space, width } from 'styled-system';
import styled from "../theme";
import { StyledSystemProps } from '../theme/theme.types';

interface Props {
  children?: React.ReactNode,
  className?: string,
}

const BoxUIContainerComponent: React.SFC<Props & StyledSystemProps> = ({ className, children }) => {
  return <div className={className ? className : ""}>{children}</div>
}

export const BoxUIContainer = styled(BoxUIContainerComponent)`
  ${space}
  ${width}
  ${flexBasis}
  ${borders}
`;
BoxUIContainer.displayName = "BoxUIContainer";
