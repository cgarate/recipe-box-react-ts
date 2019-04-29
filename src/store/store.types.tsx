export interface IngredientType {
  quantity?: number;
  unit?: string;
  name: string;
}

export interface PayloadIDType {
  id: string;
}

export interface PayloadIngredientType {
  id: string;
  ingredient: string;
}

export interface RecipeType {
  id: string;
  ingredients: IngredientType[];
  instructions: string;
  rating: number | null;
  title: string;
  visible: boolean;
}

export interface ActionType {
  type: string;
  payload?: PayloadIngredientType | PayloadIDType;
}