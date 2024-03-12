"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "easy-layout";

class RightSizeableDiv extends SizeableDiv {
  static defaultProperties = {
    className: "right"
  };
}

export default withStyle(RightSizeableDiv)`

  height: 48rem;
  position: relative;
  min-height: 12rem;
  
`;
