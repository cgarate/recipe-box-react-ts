import * as React from "react";
import { connect } from "react-redux";
import { selectRecipeRecords } from "src/selectors/recipe.selector";
import { AppState } from "src/store";
import { deleteRecipeBox } from "src/store/recipes/actions";
import { ActionCreatorDeleteRecipeBox, RecipeType } from "src/store/recipes/types";
import { FlexboxContainer } from "../common/FlexboxContainer";
import { RecipeCard } from "./RecipeCard";

interface Props {
  recipeRecords: RecipeType[];
  deleteRecipeBox: ActionCreatorDeleteRecipeBox;
}

// tslint:disable-next-line:no-shadowed-variable
const Recipes = ({ recipeRecords, deleteRecipeBox }: Props) => {
  return (
    <FlexboxContainer p={2} flexWrap="wrap">
      {recipeRecords.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipeData={recipe}
          border="1px solid #dddddd"
          width="20rem"
          minHeight="30rem"
          ml="1rem"
          mt="1rem"
          handleDeleteRecipe={deleteRecipeBox}
        />
      ))}
    </FlexboxContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  recipeRecords: selectRecipeRecords(state),
});

const mapDispatchToProps = {
  deleteRecipeBox,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipes);
