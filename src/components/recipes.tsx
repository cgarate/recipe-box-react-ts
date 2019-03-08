import * as React from "react";
import { connect } from "react-redux";
import { selectRecipeRecords } from 'src/selectors/recipe.selector'
import { AppStateType } from 'src/store/recipeBox.reducers';
import { RecipeType } from 'src/store/store.types';

interface Props {
  recipeRecords: RecipeType[],
}


const Recipes = (props: Props) => {
  return <div>Hola</div>;
};

const mapStateToProps = (state: AppStateType) => ({
  recipeRecords: selectRecipeRecords(state),
})

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
