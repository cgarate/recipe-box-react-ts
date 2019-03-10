// import { borders, color, fontSize, space, width } from "styled-system";
import * as React from "react";
import {
  space,
  width,
} from 'styled-system';
import styled from "../theme/index";
import { StyledSystemProps } from '../theme/theme.types';

interface Props {
  children?: React.ReactNode,
  className?: string,
}

const FlexboxComponent: React.SFC<Props & StyledSystemProps> = ({ className, children }) => {
  return <div className={className ? className : ""}>{children}</div>
}

export const Flexbox = styled(FlexboxComponent)`
  ${space}
  ${width}
  display: flex;
  flex-wrap: wrap;

`