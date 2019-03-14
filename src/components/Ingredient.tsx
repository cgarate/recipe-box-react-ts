import * as React from "react";
import { alignItems, borderRadius, borders, justifyContent, space, width } from "styled-system";
import { IngredientType } from "../store/store.types";
import styled from "../theme/index";
import { StyledSystemProps } from "../theme/theme.types";
import { BoxUIContainer } from "./BoxUIContainer";

interface Props {
  ingredient: IngredientType;
  className?: string;
}

export const IngredientComponent: React.SFC<Props & StyledSystemProps> = ({
  ingredient,
  className,
}) => (
  <BoxUIContainer className={className ? className : ""}>
    <BoxUIContainer flexBasis='15%'>{ingredient.quantity}</BoxUIContainer>
    <BoxUIContainer flexBasis='35%'>{ingredient.unit}</BoxUIContainer>
    <BoxUIContainer flexBasis='50%' >{ingredient.name}</BoxUIContainer>
  </BoxUIContainer>
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
