import * as React from "react";
import { connect } from "react-redux";

import { addRecipeBox } from "src/store/recipes/actions";

interface Props {
  addRecipeBox: () => void;
  children: React.ReactNode;
};

// tslint:disable: no-shadowed-variable
const AddRecipeLink = ({ addRecipeBox, children }: Props) => {
  return (
    <span>
      <a onClick={addRecipeBox}>{children}</a>
    </span>
  );
};

// Here I spent a bunch of time trying to figure out how to type dispatch.
// Turns out the type should come from redux and not react-redux
// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   addRecipeBox: () => dispatch(addRecipeBox()),
// });

// Commenting the code above and using the object form instead, leaving that as a future reference
const mapDispatchToProps = {addRecipeBox}

const AddRecipeWrapper = connect(
  null,
  mapDispatchToProps,
)(AddRecipeLink);
export default AddRecipeWrapper;
