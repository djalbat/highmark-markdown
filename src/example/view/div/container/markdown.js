"use strict";

import ContainerDiv from "../../div/container";

import MarkdownTextarea from "../../textarea/markdown";
import MarkdownParseTreeTextarea from "../../textarea/parseTree/markdown";

export default class MarkdownContainerDiv extends ContainerDiv {
  childElements() {
    return ([

      <MarkdownTextarea onKeyUp={this.keyUpHandler} />,
      <MarkdownParseTreeTextarea/>

    ]);
  }

  parentContext() {
    const context = this.getContext(),
          showMarkdownContainerDiv = this.show.bind(this),  ///
          hideMarkdownContainerDiv = this.hide.bind(this);  ///

    return ({
      ...context,
      showMarkdownContainerDiv,
      hideMarkdownContainerDiv
    });
  }

  static defaultProperties = {
    className: "markdown"
  };
}
