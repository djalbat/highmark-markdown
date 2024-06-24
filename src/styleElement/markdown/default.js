"use strict";

import defaultMarkdownStyle from "../../defaultMarkdownStyle";
import MarkdownStyleElement from "../../styleElement/markdown";

export default class DefaultMarkdownStyleElement extends MarkdownStyleElement {
  update(defaultMarkdownStyle) {
    const markdownStyle = defaultMarkdownStyle; ///

    super.update(markdownStyle)
  }

  reset() {
    this.update(defaultMarkdownStyle)
  }

  static fromAndSelectorsString(Class, selectorsString) {
    if (selectorsString === undefined) {
      selectorsString = Class; ///

      Class = DefaultMarkdownStyleElement;  ///
    }

    const defaultMarkdownStyleElement = MarkdownStyleElement.fromAndSelectorsString(Class, selectorsString);

    defaultMarkdownStyleElement.reset();
  }
}
