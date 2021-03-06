import * as React from "react";
import { BoxUIContainer } from "../common/BoxUIContainer";
import { spacing } from "../styles/spacing/index";

interface Props {
  instructions: string;
  className?: string;
}

export const InstructionsComponent = ({ instructions, className }: Props) => {
  return (
    <BoxUIContainer p={spacing.three} textAlign="justify">
      {instructions}
    </BoxUIContainer>
  );
};