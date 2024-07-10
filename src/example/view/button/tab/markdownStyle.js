"use strict";

import TabButton from "../../button/tab";

export default class MarkdownStyleTabButton extends TabButton {
  childElements() {
    return "Markdown style";
  }

  parentContext() {
    const enableMarkdownStyleTabButton = this.enable.bind(this),  ///
          disableMarkdownStyleTabButton = this.disable.bind(this);  ///

    return ({
      enableMarkdownStyleTabButton,
      disableMarkdownStyleTabButton
    });
  }

  static defaultProperties = {
    className: "markdown-style"
  }
}
