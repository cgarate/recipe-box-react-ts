export interface IPayloadIngredient {
  id: string;
  ingredient: string;
}

export const ADD_RECIPE_BOX = "ADD_RECIPE_BOX";
export const DELETE_RECIPE_BOX = "DELETE_RECIPE_BOX";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const addRecipeBox = () => {
  return { type: ADD_RECIPE_BOX };
};

export const deleteRecipeBox = () => {
  return { type: DELETE_RECIPE_BOX };
};

export const addIngredient = (payload: IPayloadIngredient) => {
  return { type: ADD_INGREDIENT, ...payload };
};

export const deleteIngredient = (payload: IPayloadIngredient) => {
  return { type: DELETE_INGREDIENT, ...payload };
};


