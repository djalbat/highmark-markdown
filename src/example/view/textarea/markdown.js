"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class MarkdownTextarea extends Textarea {
  getMarkdown() {
    const value = this.getValue(),
          markdown = value; ///

    return markdown;
  }

  setMarkdown(markdown) {
    const value = markdown; ///

    this.setValue(value);
  }

  parentContext() {
    const getMarkdown = this.getMarkdown.bind(this),
          setMarkdown = this.setMarkdown.bind(this);

    return ({
      getMarkdown,
      setMarkdown
    });
  }

  static defaultProperties = {
    className: "markdown",
    spellCheck: "false"
  };
}

export default withStyle(MarkdownTextarea)`

  height: 32em;
  resize: vertical;
  min-height: 12rem;
  
`;
