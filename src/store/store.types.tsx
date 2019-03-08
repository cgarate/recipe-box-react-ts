export interface Ingredient {
  quantity?: number;
  unit?: string;
  name: string;
}

export interface IPayloadIngredient {
  id: string;
  ingredient: string;
}

export interface RecipeType {
  id: string;
  ingredients?: Ingredient[];
  instructions: string;
  rating: number | null;
  title: string;
  visible: boolean;
}

export interface Action {
  type: string;
  payload?: IPayloadIngredient | {};
}