import * as React from "react";
import { connect } from "react-redux";
import { selectRecipeRecords } from "src/selectors/recipe.selector";
import { AppStateType } from "src/store/recipeBox.reducers";
import { RecipeType } from "src/store/store.types";
import { Flexbox } from "./Flexbox";
import { RecipeCard } from "./RecipeCard";

interface Props {
  recipeRecords: RecipeType[];
}

const Recipes = ({ recipeRecords }: Props) => {
  return (
    <Flexbox p={2} flexWrap="wrap">
      {recipeRecords.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipeData={recipe}
          border="1px solid #dddddd"
        />
      ))}
    </Flexbox>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  recipeRecords: selectRecipeRecords(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipes);
