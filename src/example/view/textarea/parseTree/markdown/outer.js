"use strict";

import withStyle from "easy-with-style";  ///

import MarkdownParseTreeTextarea from "../../../textarea/parseTree/markdown";

class OuterMarkdownParseTreeTextarea extends MarkdownParseTreeTextarea {
  parentContext() {
    const clearOuterMarkdownParseTreeTextarea = this.clear.bind(this), ///
          updateOuterMarkdownParseTreeTextarea = this.update.bind(this); ///

    return ({
      clearOuterMarkdownParseTreeTextarea,
      updateOuterMarkdownParseTreeTextarea
    });
  }

  static defaultProperties = {
    className: "outer"
  };
}

export default withStyle(OuterMarkdownParseTreeTextarea)`

  flex: 1;
  
`;
