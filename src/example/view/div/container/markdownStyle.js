"use strict";

import ContainerDiv from "../../div/container";

import MarkdownStyleTextarea from "../../textarea/markdownStyle";
import MarkdownStyleParseTeeTextarea from "../../textarea/parseTree/markdownStyle";

export default class MarkdownStyleContainerDiv extends ContainerDiv {
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
