export interface EditRecipeTitleType {
  id: string;
  status: boolean;
}

export interface EditRecipeIngredient {
  id: string;
  idIngredient: string;
  status: boolean;
}

export interface UIType {
  editRecipeTitle: EditRecipeTitleType;
  editRecipeIngredient: EditRecipeIngredient;
  editRecipeInstructions: EditRecipeTitleType;
}