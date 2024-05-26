"use strict";

import withStyle from "easy-with-style";  ///

import TabButton from "../../button/tab";

class MarkdownStyleTabButton extends TabButton {
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

export default withStyle(MarkdownStyleTabButton)`

  border-right-width: 1px;
  
  :enabled {
    border-right-width: 0;
  }
  
`;
