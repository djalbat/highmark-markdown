"use strict";

import TabButton from "../../button/tab";

export default class MarkdownTabButton extends TabButton {
  childElements() {
    return "Markdown";
  }

  parentContext() {
    const enableMarkdownTabButton = this.enable.bind(this), ///
          disableMarkdownTabButton = this.disable.bind(this); ///

    return ({
      enableMarkdownTabButton,
      disableMarkdownTabButton
    });
  }

  static defaultProperties = {
    className: "markdown"
  }
}
