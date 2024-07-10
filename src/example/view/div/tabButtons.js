"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class TabButtonsDiv extends Element {
  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "tab-buttons"
  };
}

export default withStyle(TabButtonsDiv)`

  display: grid;
  grid-template-rows: auto;
  
`;
