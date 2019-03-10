import { ActionType, PayloadIngredientType } from "./store.types";

export const ADD_RECIPE_BOX = "ADD_RECIPE_BOX";
export const DELETE_RECIPE_BOX = "DELETE_RECIPE_BOX";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const addRecipeBox = (): ActionType => ({ type: ADD_RECIPE_BOX });

export const deleteRecipeBox = (): ActionType => ({ type: DELETE_RECIPE_BOX });

export const addIngredient = (payload: PayloadIngredientType): ActionType => ({
  type: ADD_INGREDIENT,
  ...payload,
});

export const deleteIngredient = (payload: PayloadIngredientType): ActionType => ({
  type: DELETE_INGREDIENT,
  ...payload,
});
