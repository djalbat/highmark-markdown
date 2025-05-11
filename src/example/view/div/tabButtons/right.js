"use strict";

import withStyle from "easy-with-style";  ///

import CSSTabButton from "../../button/tab/css";
import HTMLTabButton from "../../button/tab/html";
import TabButtonsDiv from "../../div/tabButtons";
import PreviewTabButton from "../../button/tab/preview";
import PlainTextTabButton from "../../button/tab/plainText";

import { CSS_CUSTOM_EVENT_TYPE, HTML_CUSTOM_EVENT_TYPE, PREVIEW_CUSTOM_EVENT_TYPE, PLAIN_TEXT_CUSTOM_EVENT_TYPE } from "../../../customEventTypes";

class RightTabButtonsDiv extends TabButtonsDiv {
  cssTabButtonClickHandler = (event, element) => {
    this.css(event, element);
  }

  htmlTabButtonClickHandler = (event, element) => {
    this.html(event, element);
  }

  previewTabButtonClickHandler = (event, element) => {
    this.preview(event, element);
  }

  plainTextTabButtonClickHandler = (event, element) => {
    this.plainText(event, element);
  }

  css(event = null, element = null) {
    const eventType = CSS_CUSTOM_EVENT_TYPE;

    this.disableCSSTabButton();

    this.enableHTMLTabButton();
    this.enablePreviewTabButton();
    this.enablePlainTextTabButton();

    this.callCustomHandlers(eventType, event, element);
  }

  html(event, element) {
    const eventType = HTML_CUSTOM_EVENT_TYPE;

    this.disableHTMLTabButton();

    this.enableCSSTabButton();
    this.enablePreviewTabButton();
    this.enablePlainTextTabButton();

    this.callCustomHandlers(eventType, event, element);
  }

  preview(event, element) {
    const eventType = PREVIEW_CUSTOM_EVENT_TYPE;

    this.disablePreviewTabButton();

    this.enableCSSTabButton();
    this.enableHTMLTabButton();
    this.enablePlainTextTabButton();

    this.callCustomHandlers(eventType, event, element);
  }

  plainText(event, element) {
    const eventType = PLAIN_TEXT_CUSTOM_EVENT_TYPE;

    this.disablePlainTextTabButton();

    this.enableCSSTabButton();
    this.enableHTMLTabButton();
    this.enablePreviewTabButton();

    this.callCustomHandlers(eventType, event, element);
  }

  childElements() {
    return ([

      <CSSTabButton onClick={this.cssTabButtonClickHandler} disabled />,
      <HTMLTabButton onClick={this.htmlTabButtonClickHandler} />,
      <PreviewTabButton onClick={this.previewTabButtonClickHandler} />,
      <PlainTextTabButton onClick={this.plainTextTabButtonClickHandler} />

    ]);
  }

  static defaultProperties = {
    className: "right"
  };
}

export default withStyle(RightTabButtonsDiv)`

  grid-template-columns: 1fr 1fr 1fr 1fr;  

`;
