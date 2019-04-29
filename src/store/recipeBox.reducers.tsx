import * as _ from "lodash";
import { combineReducers } from "redux";
import * as uuid from "uuid";
import { ADD_RECIPE_BOX, DELETE_RECIPE_BOX } from "./recipeBox.actions";
import { ActionType, RecipeType } from "./store.types";

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
        { quantity: 3, unit: "", name: "Tomatoes" },
        { quantity: 100, unit: "grams", name: "Goat Cheese" },
        { quantity: 1, unit: "can", name: "Chipotle Peppers" },
        { quantity: 1, unit: "splash", name: "Olive Oil" },
        { quantity: 1, unit: "box", name: "Canapé Crackers" },
      ],
      instructions:
        "Slice tomatoes. Mix the goat cheese with the chopped chipotle peppers. Arrange tomatoes on an oven dish, sprinkle olive oil on top, and put it all inside the oven at 375 F for 5 minutes. After 5 minutes, take the tomatoes out and add the goat cheese mix on top. Bake for 3 more minutes. Enjoy!",
      rating: null,
      title: "Broiled Chipotle Tomatoes",
      visible: true,
    },
  ],
  ui: {
    editIngredient: {},
    editInstructions: {},
    editRecipeTitle: { id: null, status: false },
  },
};

// Notice the way we set the default value for the state. Using assertion in typescript to assign the type.
// Syntax is: value 'as' type
const recipes = (
  storeRecipes = defaultStore.recipes as RecipeType[],
  action: ActionType,
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

const rootReducer = combineReducers({
  recipes,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
