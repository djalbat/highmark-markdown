"use strict";

import withStyle from "easy-with-style";  ///

import ContainerDiv from "../../div/container";
import MarkdownTextarea from "../../textarea/markdown";
import MarkdownParseTreeTextarea from "../../textarea/parseTree/markdown";

import { FLEX } from "../../../constants";

class MarkdownContainerDiv extends ContainerDiv {
  show() {
    const displayStyle = FLEX;

    this.display(displayStyle);
  }

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

export default withStyle(MarkdownContainerDiv)`

  gap: 1rem;
  height: 97rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;
