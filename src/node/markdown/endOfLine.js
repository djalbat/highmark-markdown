"use strict";

import MarkdownNode from "../../node/markdown";

import { CARRIAGE_RETURN } from "../../constants";

export default class EndOfLineMarkdownNode extends MarkdownNode {
  content(context) {
    const content = CARRIAGE_RETURN;

    return content;
  }

  createDOMElement(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    return domElement;
  }

  asHTML(indent, context) {
    const content = this.content(context),
          html = content;  ///

    return html;
  }

  asPlainText(context) {
    const content = this.content(context),
          plainText = content;  ///

    return plainText;
  }

  static lines = 0;

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EndOfLineMarkdownNode, ruleName, childNodes, opacity); }
}
