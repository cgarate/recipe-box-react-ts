import {
  ADD_INGREDIENT,
  ADD_RECIPE_BOX,
  DELETE_INGREDIENT,
  DELETE_RECIPE_BOX,
} from "./constants";
import {
  ActionCreatorAddIngredient,
  ActionCreatorAddRecipeBox,
  ActionCreatorDeleteIngredient,
  ActionCreatorDeleteRecipeBox,
} from "./types";

export const addRecipeBox: ActionCreatorAddRecipeBox = () => ({
  payload: {},
  type: ADD_RECIPE_BOX,
});

export const deleteRecipeBox: ActionCreatorDeleteRecipeBox = (id) => ({
  payload: {
    id,
  },
  type: DELETE_RECIPE_BOX,
});

export const addIngredient: ActionCreatorAddIngredient = (
  id,
  quantity,
  unit,
  name,
) => ({
  payload: { id, quantity, unit, name },
  type: ADD_INGREDIENT,
});

export const deleteIngredient: ActionCreatorDeleteIngredient = (
  recipeId,
  ingredientId,
) => ({
  payload: { recipeId, ingredientId },
  type: DELETE_INGREDIENT,
});
