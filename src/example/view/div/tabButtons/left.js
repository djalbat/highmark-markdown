"use strict";

import withStyle from "easy-with-style";  ///

import TabButtonsDiv from "../../div/tabButtons";
import MarkdownTabButton from "../../button/tab/markdown";
import MarkdownStyleTabButton from "../../button/tab/markdownStyle";

import { MARKDOWN_CUSTOM_EVENT_TYPE, MARKDOWN_STYLE_CUSTOM_EVENT_TYPE } from "../../../customEventTypes";

class LeftTabButtonsDiv extends TabButtonsDiv {
  markdownStyleTabButtonClickHandler = (event, element) => {
    this.markdownStyle(event, element);
  }

  markdownTabButtonClickHandler = (event, element) => {
    this.markdown(event, element);
  }

  markdownStyle(event, element) {
    const eventType = MARKDOWN_STYLE_CUSTOM_EVENT_TYPE;

    this.enableMarkdownTabButton();

    this.disableMarkdownStyleTabButton();

    this.callCustomHandlers(eventType, event, element);
  }

  markdown(event = null, element = null) {
    const eventType = MARKDOWN_CUSTOM_EVENT_TYPE;

    this.disableMarkdownTabButton();

    this.enableMarkdownStyleTabButton();

    this.callCustomHandlers(eventType, event, element);
  }

  didMount() {
    this.markdownStyle();
  }

  willUnmount() {
    ///
  }

  childElements() {
    return ([

      <MarkdownStyleTabButton onClick={this.markdownStyleTabButtonClickHandler} />,
      <MarkdownTabButton onClick={this.markdownTabButtonClickHandler} />

    ]);
  }

  static defaultProperties = {
    className: "left"
  };
}

export default withStyle(LeftTabButtonsDiv)`

  grid-template-columns: 1fr 1fr;  

`;
