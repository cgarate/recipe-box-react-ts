import { combineReducers } from "redux";
import * as uuid from "uuid";
import { ADD_RECIPE_BOX } from "./recipeBox.actions";
import { Action, RecipeType } from "./store.types";

const { v1 } = uuid;

const createNewRecipe = (): RecipeType => {
  const uID = v1();
  return {
    id: uID,
    ingredients: [],
    instructions: "",
    rating: null,
    title: "",
    visible: true,
  };
};

// Notice the way we set the default value for the state. Using assertion in typescript to assign the type.
// Syntax is: value 'as' type
const recipes = (state = [] as RecipeType[], action: Action): RecipeType[] => {
  switch (action.type) {
    case ADD_RECIPE_BOX:
      return [...state, createNewRecipe()];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  recipes,
});

export type AppStateType = ReturnType<typeof rootReducer>

export default rootReducer;
