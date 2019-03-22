import * as React from "react";
import { alignItems, borderRadius, borders, justifyContent, space, width } from "styled-system";
import { IngredientType } from "../store/store.types";
import styled from "../theme/index";
import { StyledSystemProps } from "../theme/theme.types";
import { BoxUIContainer } from "./BoxUIContainer";
import { FlexboxElement } from './FlexboxElement';

interface Props {
  ingredient: IngredientType;
  className?: string;
}

export const IngredientComponent: React.SFC<Props & StyledSystemProps> = ({
  ingredient,
  className,
}) => (
  <BoxUIContainer className={className ? className : ""} >
    <FlexboxElement flexBasis='15%'>{ingredient.quantity}</FlexboxElement>
    <FlexboxElement flexBasis='35%'>{ingredient.unit}</FlexboxElement>
    <FlexboxElement flexBasis='50%' >{ingredient.name}</FlexboxElement>
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
IngredientComponent.displayName = "Ingredient";
