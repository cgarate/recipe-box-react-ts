import { combineReducers } from "redux";
import * as uuid from "uuid";
import { ADD_RECIPE_BOX } from "./recipeBox.actions";
import { ActionType, RecipeType } from "./store.types";

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

const defaultState = [
  {
    id: "1",
    ingredients: [
      {quantity: 3, unit: "pieces", name: "Tomatoes",},
      {quantity: 100, unit: "grams", name: "Goat Cheese",},
      {quantity: 1, unit: "can", name: "Chipotle Peppers",},
      {quantity: 1, unit: "splash", name: "Olive Oil",},
      {quantity: 1, unit: "box", name: "Canapé Crackers",},
      ],
    instructions: "Slice tomatoes. Mix the goat cheese with the chopped chipotle peppers. Arrange tomatoes on an oven dish, sprinkle olive oil on top, and put it all inside the oven at 375 F for 5 minutes. After 5 minutes, take the tomatoes out and add the goat cheese mix on top. Bake for 3 more minutes. Enjoy!",
    rating: null,
    title: "Broiled Chipotle Tomatoes",
    visible: true,
  },
]

// Notice the way we set the default value for the state. Using assertion in typescript to assign the type.
// Syntax is: value 'as' type
const recipes = (state = defaultState as RecipeType[], action: ActionType): RecipeType[] => {
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
