import { AppStateType } from 'src/store/recipeBox.reducers';

export const selectRecipeRecords = (state: AppStateType) => state.recipes;