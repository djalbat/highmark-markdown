"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "easy-layout";

class RightSizeableDiv extends SizeableDiv {
  static defaultProperties = {
    className: "right"
  };
}

export default withStyle(RightSizeableDiv)`

  height: 32rem;
  min-width: 1rem;
  flex-direction: column;
  
`;
