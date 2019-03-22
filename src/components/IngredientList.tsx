import * as React from "react";
import { IngredientType } from "../store/store.types";
import { borderRadius } from "../styles/border-radius/index";
import { spacing } from "../styles/spacing/index";
import { BoxUIContainer } from "./BoxUIContainer";
import { FlexboxContainer } from "./FlexboxContainer";
import { Ingredient } from "./Ingredient";

interface Props {
  ingredients: IngredientType[];
}

const IngredientList = ({ ingredients }: Props) => {
  return (
    <BoxUIContainer p={spacing.two}>
      <h4>List of Ingredients</h4>
      <FlexboxContainer flexDirection="column" justifyContent="flex-start">
        {ingredients.map((ingredient, index) => {
          return (
            <Ingredient
              key={`recipe-ingredient-${index}-${ingredient.name}`}
              ingredient={ingredient}
              px={spacing.two}
              pt={spacing.zer0}
              pb="0.0625rem"
              border="1px solid"
              borderRadius={borderRadius.eight}
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
