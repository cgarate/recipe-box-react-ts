import * as React from "react";
import { space } from 'styled-system';
import styled from "../theme";
import { StyledSystemProps } from '../theme/theme.types';

interface Props {
  children?: React.ReactNode,
  className?: string,
}

const Header1: React.SFC<Props & StyledSystemProps> = ({ className, children }) => {
  return <h1 className={className ? className : ""}>{children}</h1>
}

const Header2: React.SFC<Props & StyledSystemProps> = ({ className, children }) => {
  return <h2 className={className ? className : ""}>{children}</h2>
}

const Header3: React.SFC<Props & StyledSystemProps> = ({ className, children }) => {
  return <h3 className={className ? className : ""}>{children}</h3>
}

const Header4: React.SFC<Props & StyledSystemProps> = ({ className, children }) => {
  return <h4 className={className ? className : ""}>{children}</h4>
}

const Header5: React.SFC<Props & StyledSystemProps> = ({ className, children }) => {
  return <h5 className={className ? className : ""}>{children}</h5>
}

const Header6: React.SFC<Props & StyledSystemProps> = ({ className, children }) => {
  return <h6 className={className ? className : ""}>{children}</h6>
}

export const H1 = styled(Header1)`
  ${space}
`;
H1.displayName = "H1";

export const H2 = styled(Header2)`
  ${space}
`;
H2.displayName = "H2";

export const H3 = styled(Header3)`
  ${space}
`;
H3.displayName = "H3";

export const H4 = styled(Header4)`
  ${space}
`;
H4.displayName = "H4";

export const H5 = styled(Header5)`
  ${space}
`;
H5.displayName = "H5";

export const H6 = styled(Header6)`
  ${space}
`;
H6.displayName = "H6";
