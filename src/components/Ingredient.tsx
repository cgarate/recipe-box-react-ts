import * as React from "react";
import { IngredientType } from "../store/store.types";
import styled from "../theme/index";
import { BoxUIContainer } from "./BoxUIContainer";

interface Props {
  ingredient: IngredientType;
}

const IngredientItem = styled.li`
  border: 1px solid #000000;
  list-style: none;
  display: flex;
`;

const Ingredient = ({ ingredient }: Props) => {
  return (
    <IngredientItem>
      <BoxUIContainer>{ingredient.quantity}</BoxUIContainer>
      <BoxUIContainer>{ingredient.unit}</BoxUIContainer>
      <BoxUIContainer>{ingredient.name}</BoxUIContainer>
    </IngredientItem>
  );
};

export default Ingredient;
