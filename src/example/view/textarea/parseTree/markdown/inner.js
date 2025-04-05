"use strict";

import withStyle from "easy-with-style";  ///

import MarkdownParseTreeTextarea from "../../../textarea/parseTree/markdown";

class InnerMarkdownParseTreeTextarea extends MarkdownParseTreeTextarea {
  update(parseTree) {
    parseTree.shiftLine();
    parseTree.shiftLine();

    super.update(parseTree);

  }

  parentContext() {
    const clearInnerMarkdownParseTreeTextarea = this.clear.bind(this), ///
          updateInnerMarkdownParseTreeTextarea = this.update.bind(this); ///

    return ({
      clearInnerMarkdownParseTreeTextarea,
      updateInnerMarkdownParseTreeTextarea
    });
  }

  static defaultProperties = {
    className: "outer"
  };
}

export default withStyle(InnerMarkdownParseTreeTextarea)`

  margin-top: 1rem;
  height: 32rem;
  
`;
