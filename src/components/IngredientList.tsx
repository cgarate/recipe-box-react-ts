import * as React from "react";
import { IngredientType } from "../store/store.types";
import { BoxUIContainer } from "./BoxUIContainer";
import Ingredient from "./Ingredient";

interface Props {
  ingredients: IngredientType[];
}

const IngredientList = ({ ingredients }: Props) => {
  return (
    <BoxUIContainer>
      <ul>
        {ingredients.map((ingredient, index) => {
          return (
            <Ingredient
              key={`recipe-ingredient-${index}-${ingredient.name}`}
              ingredient={ingredient}
            />
          );
        })}
      </ul>
    </BoxUIContainer>
  );
};

export default IngredientList;
