import * as React from "react";
import { BoxUIContainer } from "../common/BoxUIContainer";

interface Props {
  instructions: string;
  className?: string;
}

export const InstructionsComponent = ({ instructions, className }: Props) => {
  return (
    <BoxUIContainer className={className ? className : ""}>
      {instructions}
    </BoxUIContainer>
  );
};
