import * as React from "react";

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

export const Header = (props: IProps) => {
  return (
    <nav>
      <div>Recipe Box</div>
      <div>
        <a onClick={event => console.log(event.target)}>Add New Recipe Card</a>
      </div>
    </nav>
  );
};
