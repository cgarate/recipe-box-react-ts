import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addRecipeBox } from "../store/recipeBox.actions";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
};

const Link = ({ onClick, children }: Props) => {
  return (
    <span>
      <a onClick={onClick}>{children}</a>
    </span>
  );
};

// Here I spent a bunch of time trying to figure out how to type dispatch.
// Turns out the type should come from redux and not react-redux
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick: () => dispatch(addRecipeBox()),
});

const LinkContainer = connect(
  null,
  mapDispatchToProps,
)(Link);
export default LinkContainer;
