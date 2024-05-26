"use strict";

import withStyle from "easy-with-style";  ///

import TabButton from "../../button/tab";

class MarkdownTabButton extends TabButton {
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

export default withStyle(MarkdownTabButton)`

  border-right-width: 0;
  
  border-left-width: 1px;
  
  :enabled {
    border-left-width: 0;
  }
  
`;
