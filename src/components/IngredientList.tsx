import * as React from "react";
import { BoxUIContainer } from "../common/BoxUIContainer";
import { FlexboxContainer } from "../common/FlexboxContainer";
import { H4 } from "../common/Hn";
import { IngredientType } from "../store/store.types";
import { spacing } from "../styles/spacing/index";
import { Ingredient } from "./Ingredient";

interface Props {
  ingredients: IngredientType[];
}

const IngredientList = ({ ingredients }: Props) => {
  return (
    <BoxUIContainer p={spacing.two}>
      <H4 m="0" pb={spacing.two} pl={spacing.two}>Ingredients</H4>
      <FlexboxContainer flexDirection="column" justifyContent="flex-start">
        {ingredients.map((ingredient, index) => {
          return (
            <Ingredient
              key={`recipe-ingredient-${index}-${ingredient.name}`}
              ingredient={ingredient}
              p={spacing.two}
              borderBottom="1px solid"
              alignItems="flex-end"
              justifyContent="space-between"
            />
          );
        })}
      </FlexboxContainer>
    </BoxUIContainer>
  );
};

export default IngredientList;
