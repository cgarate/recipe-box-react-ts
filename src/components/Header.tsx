import * as React from "react";

import { FlexboxContainer } from "../common/FlexboxContainer";
import { H1, H4 } from "../common/Hn";
import { spacing } from "../styles/spacing/index";
import AddRecipeWrapper from "./AddRecipeLink";

export const Header = () => {
  return (
    <FlexboxContainer
      justifyContent="space-between"
      pl={spacing.four}
      pr={spacing.four}
      alignItems="center"
    >
      <H1>Recipe Box</H1>
      <div>
        <AddRecipeWrapper>
          <H4>+ Add New Recipe Card</H4>
        </AddRecipeWrapper>
      </div>
    </FlexboxContainer>
  );
};
