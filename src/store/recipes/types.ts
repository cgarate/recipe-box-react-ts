import { TypedAction } from "../types";
import {
  ADD_INGREDIENT,
  ADD_RECIPE_BOX,
  DELETE_INGREDIENT,
  DELETE_RECIPE_BOX,
} from "./constants";

export interface TIngredient {
  id: string;
  quantity?: number;
  unit?: string;
  name: string;
}

export interface RecipeType {
  id: string;
  ingredients: TIngredient[];
  instructions: string;
  rating: number | null;
  title: string;
  visible: boolean;
}

export interface PayloadIngredient {
  recipeId: string;
  ingredientId: string;
}

export interface PayloadDeleteRecipeBox {
  id: string;
}

export type AddRecipeBoxAction = TypedAction<typeof ADD_RECIPE_BOX, {}>;

export type DeleteRecipeBoxAction = TypedAction<
  typeof DELETE_RECIPE_BOX,
  PayloadDeleteRecipeBox
>;

export type AddIngredientAction = TypedAction<
  typeof ADD_INGREDIENT,
  TIngredient
>;

export type DeleteIngredientAction = TypedAction<
  typeof DELETE_INGREDIENT,
  PayloadIngredient
>;

export type RecipeActionTypes =
  | AddRecipeBoxAction
  | DeleteRecipeBoxAction
  | AddIngredientAction
  | DeleteIngredientAction;

export type ActionCreatorAddRecipeBox = () => AddRecipeBoxAction;

export type ActionCreatorDeleteRecipeBox = (
  id: string,
) => DeleteRecipeBoxAction;

export type ActionCreatorAddIngredient = (
  id: string,
  quantity: number,
  unit: string,
  name: string,
) => AddIngredientAction;

export type ActionCreatorDeleteIngredient = (
  recipeId: string,
  ingredientId: string,
) => DeleteIngredientAction;
