import * as _ from "lodash";
import * as uuid from "uuid";
import { ADD_RECIPE_BOX, DELETE_RECIPE_BOX } from './constants'
import { RecipeActionTypes } from "./types";
import { RecipeType } from "./types";

const { v1 } = uuid;

const createNewRecipe = (): RecipeType => {
  const uID = v1();
  return {
    id: uID,
    ingredients: [],
    instructions: "Add Instructions",
    rating: null,
    title: "Add Title",
    visible: true,
  };
};

export const deleteRecipe = (store: RecipeType[], id: string): RecipeType[] =>
  _.filter(store, recipe => recipe.id !== id);

const defaultStore = {
  recipes: [
    {
      id: "1",
      ingredients: [
        { id: 'i1', quantity: 3, unit: "", name: "Tomatoes" },
        { id: 'i2', quantity: 100, unit: "grams", name: "Goat Cheese" },
        { id: 'i3', quantity: 1, unit: "can", name: "Chipotle Peppers" },
        { id: 'i4', quantity: 1, unit: "splash", name: "Olive Oil" },
        { id: 'i5', quantity: 1, unit: "box", name: "Canapé Crackers" },
      ],
      instructions:
        "Slice tomatoes. Mix the goat cheese with the chopped chipotle peppers. Arrange tomatoes on an oven dish, sprinkle olive oil on top, and put it all inside the oven at 375 F for 5 minutes. After 5 minutes, take the tomatoes out and add the goat cheese mix on top. Bake for 3 more minutes. Enjoy!",
      rating: null,
      title: "Broiled Chipotle Tomatoes",
      visible: true,
    },
  ],
  ui: {
    editRecipeIngredient: {id: null, idIngredient: null, status: false, },
    editRecipeInstructions: { id: null, status: false, },
    editRecipeTitle: { id: null, status: false, },
  },
};

// Notice the way we set the default value for the state. Using assertion in typescript to assign the type.
// Syntax is: value 'as' type
export const recipesReducer = (
  storeRecipes = defaultStore.recipes as RecipeType[],
  action: RecipeActionTypes,
): RecipeType[] => {
  switch (action.type) {
    case ADD_RECIPE_BOX:
      return [...storeRecipes, createNewRecipe()];
    case DELETE_RECIPE_BOX:
      return action.payload && action.payload.id
        ? deleteRecipe(storeRecipes, action.payload.id)
        : storeRecipes;
    default:
      return storeRecipes;
  }
};

