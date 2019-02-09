import { Action, IPayloadIngredient } from "./store.types";

export const ADD_RECIPE_BOX = "ADD_RECIPE_BOX";
export const DELETE_RECIPE_BOX = "DELETE_RECIPE_BOX";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const addRecipeBox = (): Action => ({ type: ADD_RECIPE_BOX });

export const deleteRecipeBox = (): Action => ({ type: DELETE_RECIPE_BOX });

export const addIngredient = (payload: IPayloadIngredient): Action => ({
  type: ADD_INGREDIENT,
  ...payload,
});

export const deleteIngredient = (payload: IPayloadIngredient): Action => ({
  type: DELETE_INGREDIENT,
  ...payload,
});
