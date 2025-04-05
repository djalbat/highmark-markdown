"use strict";

import withStyle from "easy-with-style";  ///

import ParseTreeTextarea from "../../textarea/parseTree";

class MarkdownStyleParseTreeTextarea extends ParseTreeTextarea {
  parentContext() {
    const clearMarkdownStyleParseTreeTextarea = this.clear.bind(this), ///
          updateMarkdownStyleParseTreeTextarea = this.update.bind(this); ///

    return ({
      clearMarkdownStyleParseTreeTextarea,
      updateMarkdownStyleParseTreeTextarea
    });
  }

  static defaultProperties = {
    className: "markdown-style"
  };
}

export default withStyle(MarkdownStyleParseTreeTextarea)`

  flex: 1;
  
`;
