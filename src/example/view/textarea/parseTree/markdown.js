"use strict";

import withStyle from "easy-with-style";  ///

import ParseTreeTextarea from "../../textarea/parseTree";

class MarkdownParseTreeTextarea extends ParseTreeTextarea {
  parentContext() {
    const clearMarkdownParseTreeTextarea = this.clear.bind(this), ///
          updateMarkdownParseTreeTextarea = this.update.bind(this); ///

    return ({
      clearMarkdownParseTreeTextarea,
      updateMarkdownParseTreeTextarea
    });
  }

  static defaultProperties = {
    className: "markdown"
  };
}

export default withStyle(MarkdownParseTreeTextarea)`

  flex: 1;
  
`;
