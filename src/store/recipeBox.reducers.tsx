import { uuid } from 'uuid/v1';
import { ADD_RECIPE_BOX, IPayloadIngredient } from "./recipeBox.actions";

interface Ingredient {
  quantity?: number;
  unit?: string;
  name: string;
}

interface Recipe {
  id: string;
  ingredients?: Ingredient[];
  instructions: string;
  rating: number | null;
  title: string;
  visible: boolean;
}

interface InitialState {
  recipes: Recipe[];
}

interface Action {
  type: string;
  payload: IPayloadIngredient | {};
}

const createNewRecipe = () => {
  // TODO: replace for UUID
  const uuid = "abc123";
  return {
    id: uuid,
    ingredients: [],
    instructions: "",
    rating: null,
    title: "",
    visible: true,
  };
};

export const storeModel = {
  recipes: [
    {
      id: "1",
      ingredients: [],
      instructions: "",
      rating: null,
      title: "",
      visible: true,
    },
  ],
};

const initialState = {
  recipes: [],
};

const recipeBoxApp = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_RECIPE_BOX:
      return { recipes: [...state.recipes, createNewRecipe()] };
    default:
      return state
  }
};
