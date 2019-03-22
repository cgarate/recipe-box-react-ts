import * as React from "react";
import { RecipeType } from "src/store/store.types";
import { borders, color, space, width  } from "styled-system";
import styled from "../theme/index";
import { StyledSystemProps } from "../theme/theme.types";
import { BoxUIContainer } from "./BoxUIContainer";
import IngredientList from "./IngredientList";
import { InstructionsComponent } from './Instructions';

interface Props {
  recipeData: RecipeType;
  className?: string;
}

const RecipeCardComponent: React.SFC<Props & StyledSystemProps> = ({
  className,
  recipeData,
}) => {
  return (
    <BoxUIContainer className={className ? className : ""}>
      <h3>{recipeData.title}</h3>
      <IngredientList ingredients={recipeData.ingredients}  />
      <InstructionsComponent instructions={recipeData.instructions} />
    </BoxUIContainer>
  );
};

export const RecipeCard = styled(RecipeCardComponent)`
  ${color}
  ${space}
  ${width}
  ${borders}
`;
RecipeCardComponent.displayName = "RecipeCard";
