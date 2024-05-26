"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import MarkdownTabButton from "../button/tab/markdown";
import MarkdownStyleTabButton from "../button/tab/markdownStyle";

import { MARKDOWN_CUSTOM_EVENT_TYPE, MARKDOWN_STYLE_CUSTOM_EVENT_TYPE } from "../../customEventTypes";

class TabButtonsDiv extends Element {
  markdownStyleTabButtonClickHandler = (event, element) => {
    this.markdownStyle(event, element);
  }

  markdownTabButtonClickHandler = (event, element) => {
    this.markdown(event, element);
  }

  markdownStyle(event = null, element = null) {
    this.enableMarkdownTabButton();
    this.disableMarkdownStyleTabButton();

    const eventType = MARKDOWN_STYLE_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(eventType, event, element);
  }

  markdown(event = null, element = null) {
    this.disableMarkdownTabButton();
    this.enableMarkdownStyleTabButton();

    const eventType = MARKDOWN_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(eventType, event, element);
  }

  didMount() {
    this.markdown();
  }

  willUnmount() {
    ///
  }

  childElements() {
    return ([

      <MarkdownTabButton onClick={this.markdownTabButtonClickHandler} />,
      <MarkdownStyleTabButton onClick={this.markdownStyleTabButtonClickHandler} />

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "tab-buttons"
  };
}

export default withStyle(TabButtonsDiv)`

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;  
  
`;
