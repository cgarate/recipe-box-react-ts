import * as React from "react";
import LinkContainer from './Link';

export const Header = () => {
  return (
    <nav>
      <div>Recipe Box</div>
      <div>
        <LinkContainer>
          Add New Recipe Card
        </LinkContainer>
      </div>
    </nav>
  );
};


