"use strict";

import withStyle from "easy-with-style";  ///

import ContainerDiv from "../../div/container";
import MarkdownTextarea from "../../textarea/markdown";
import OuterMarkdownParseTreeTextarea from "../../textarea/parseTree/markdown/outer";

import { FLEX } from "../../../constants";

class MarkdownContainerDiv extends ContainerDiv {
  show() {
    const displayStyle = FLEX;

    this.display(displayStyle);
  }

  childElements() {
    return ([

      <MarkdownTextarea onKeyUp={this.keyUpHandler} />,
      <OuterMarkdownParseTreeTextarea/>

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
  height: 65rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;
