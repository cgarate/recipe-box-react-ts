import * as React from "react";
import { connect } from "react-redux";
import { selectRecipeRecords } from "src/selectors/recipe.selector";
import { AppStateType } from "src/store/recipeBox.reducers";
import { RecipeType } from "src/store/store.types";
import { FlexboxContainer } from "../common/FlexboxContainer";
import { RecipeCard } from "./RecipeCard";

interface Props {
  recipeRecords: RecipeType[];
}

const Recipes = ({ recipeRecords }: Props) => {
  return (
    <FlexboxContainer p={2} flexWrap="wrap">
      {recipeRecords.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipeData={recipe}
          border="1px solid #dddddd"
          width="20rem"
          ml="1rem"
          mt="1rem"
        />
      ))}
    </FlexboxContainer>
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
