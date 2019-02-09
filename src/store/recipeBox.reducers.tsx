import { combineReducers } from "redux";
import * as uuid from "uuid";
import { ADD_RECIPE_BOX } from "./recipeBox.actions";
import { Action, Recipe } from "./store.types";

const { v1 } = uuid;

const createNewRecipe = (): Recipe => {
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

// Notice the way we set the default value for the state. Using assertion in typescript to sssign the type.
// Syntax is: value 'as' type
const recipes = (state = [] as Recipe[], action: Action): Recipe[] => {
  switch (action.type) {
    case ADD_RECIPE_BOX:
      return [...state, createNewRecipe()];
    default:
      return state;
  }
};

const recipeBoxApp = combineReducers({
  recipes,
});

export default recipeBoxApp;
