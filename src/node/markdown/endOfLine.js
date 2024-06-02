"use strict";

import MarkdownNode from "../../node/markdown";

import { CARRIAGE_RETURN } from "../../constants";

export default class EndOfLineMarkdownNode extends MarkdownNode {
  content(context) {
    const content = CARRIAGE_RETURN;

    return content;
  }

  asHTML(indent, context) {
    const content = this.content(context),
          html = content;  ///

    return html;
  }

  createDOMElement(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    this.setDOMElement(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EndOfLineMarkdownNode, ruleName, childNodes, opacity); }
}
