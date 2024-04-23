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

  static fromMediaTypeNameAndSelectorsString(Class, mediaTypeName, selectorsString) {
    if (selectorsString === undefined) {
      selectorsString = mediaTypeName; ///

      mediaTypeName = Class; ///

      Class = DefaultMarkdownStyleElement;  ///
    }

    const defaultMarkdownStyleElement = MarkdownStyleElement.fromMediaTypeNameAndSelectorsString(Class, mediaTypeName, selectorsString);

    defaultMarkdownStyleElement.reset();
  }
}
