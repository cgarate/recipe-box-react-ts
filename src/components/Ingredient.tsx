import * as React from "react";
import {
  alignItems,
  borderRadius,
  borders,
  justifyContent,
  space,
  width,
} from "styled-system";
import { FlexboxContainer } from "../common/FlexboxContainer";
import { FlexboxElement } from "../common/FlexboxElement";
import { TIngredient } from "../store/recipes/types";
import styled from "../theme/index";
import { StyledSystemProps } from "../theme/theme.types";

interface Props {
  ingredient: TIngredient;
  className?: string;
}

export const IngredientComponent: React.SFC<Props & StyledSystemProps> = ({
  ingredient,
  className,
}) => (
  <FlexboxContainer className={className ? className : ""}>
    <FlexboxElement flexBasis="15%">{ingredient.quantity}</FlexboxElement>
    <FlexboxElement flexBasis="35%">{ingredient.unit}</FlexboxElement>
    <FlexboxElement flexBasis="50%">{ingredient.name}</FlexboxElement>
  </FlexboxContainer>
);

export const Ingredient = styled(IngredientComponent)`
  display: flex;
  ${space}
  ${width}
  ${justifyContent}
  ${alignItems}
  ${borders}
  ${borderRadius}
`;
IngredientComponent.displayName = "Ingredient";
