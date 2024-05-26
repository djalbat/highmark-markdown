"use strict";

import ParseTreeTextarea from "../../textarea/parseTree";

export default class MarkdownParseTreeTextarea extends ParseTreeTextarea {
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
};
