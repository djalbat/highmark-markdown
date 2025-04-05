"use strict";

import withStyle from "easy-with-style";  ///

import ContainerDiv from "../../div/container";
import MarkdownStyleTextarea from "../../textarea/markdownStyle";
import MarkdownStyleParseTeeTextarea from "../../textarea/parseTree/markdownStyle";

import { FLEX } from "../../../constants";

class MarkdownStyleContainerDiv extends ContainerDiv {
  show() {
    const displayStyle = FLEX;

    this.display(displayStyle);
  }

  childElements() {
    return ([

      <MarkdownStyleTextarea onKeyUp={this.keyUpHandler} />,
      <MarkdownStyleParseTeeTextarea/>

    ]);
  }

  parentContext() {
    const context = this.getContext(),
          showMarkdownStyleContainerDiv = this.show.bind(this),  ///
          hideMarkdownStyleContainerDiv = this.hide.bind(this);  ///

    return ({
      ...context,
      showMarkdownStyleContainerDiv,
      hideMarkdownStyleContainerDiv
    });
  }

  static Textarea = MarkdownStyleTextarea;

  static defaultProperties = {
    className: "markdown-style"
  };
}

export default withStyle(MarkdownStyleContainerDiv)`

  gap: 1rem;
  height: 65rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;