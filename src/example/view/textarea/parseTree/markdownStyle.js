"use strict";

import ParseTreeTextarea from "../../textarea/parseTree";

export default class MarkdownStyleParseTreeTextarea extends ParseTreeTextarea {
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
};
