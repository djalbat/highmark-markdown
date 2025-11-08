"use strict";

import defaultMarkdownStyle from "../../style/defaultMarkdown";
import MarkdownStyleElement from "../../styleElement/markdown";

export default class DefaultMarkdownStyleElement extends MarkdownStyleElement {
  update(defaultMarkdownStyle) {
    const markdownStyle = defaultMarkdownStyle; ///

    super.update(markdownStyle)
  }

  reset() {
    this.update(defaultMarkdownStyle)
  }

  static fromCSSSelectorsString(Class, cssSelectorsString) {
    if (cssSelectorsString === undefined) {
      cssSelectorsString = Class; ///

      Class = DefaultMarkdownStyleElement;  ///
    }

    const defaultMarkdownStyleElement = MarkdownStyleElement.fromCSSSelectorsString(Class, cssSelectorsString);

    defaultMarkdownStyleElement.reset();
  }
}
