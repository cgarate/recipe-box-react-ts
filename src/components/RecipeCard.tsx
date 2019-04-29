import * as React from "react";
import { RecipeType } from "src/store/store.types";
import {
  borders,
  color,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  space,
  width,
} from "styled-system";
import { FlexboxContainer } from "../common/FlexboxContainer";
import { FlexboxElement } from "../common/FlexboxElement";
import { H3 } from "../common/Hn";
import { spacing } from "../styles/spacing/index";
import styled from "../theme/index";
import { StyledSystemProps } from "../theme/theme.types";
import IngredientList from "./IngredientList";
import { InstructionsComponent } from "./Instructions";

interface Props {
  recipeData: RecipeType;
  className?: string;
}

const RecipeCardComponent: React.SFC<Props & StyledSystemProps> = ({
  className,
  recipeData,
}) => {
  return (
    <FlexboxElement className={className ? className : ""}>
      <FlexboxContainer justifyContent="space-between" alignItems="center">
        <H3 p={spacing.three} m="0">{recipeData.title}</H3>
        <span>X</span>
      </FlexboxContainer>
      
      <IngredientList ingredients={recipeData.ingredients} />
      <InstructionsComponent instructions={recipeData.instructions} />
    </FlexboxElement>
  );
};

export const RecipeCard = styled(RecipeCardComponent)`
  ${color}
  ${space}
  ${width}
  ${borders}
  ${maxWidth}
  ${minWidth}
  ${maxHeight}
  ${minHeight}
  ${height}
`;
RecipeCardComponent.displayName = "RecipeCard";
