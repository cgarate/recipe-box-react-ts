import * as React from "react";
import { color, space, width } from 'styled-system';
import styled from "../theme/index";
import { StyledSystemProps } from '../theme/theme.types';
import { Block } from "./Block";

interface Props {
  children?: React.ReactNode;
  title: string;
  className?: string;
}

const Card: React.SFC<Props & StyledSystemProps> = ({ className, title, children }) => {
  return (
    <Block className={className ? className : ""}>
      <h1>{title}</h1>
      {children}
    </Block>
  );
};

export const StyledCard = styled(Card)`
  ${color}
  ${space}
  ${width}
`;
