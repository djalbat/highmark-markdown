"use strict";

import MarkdownNode from "../../node/markdown";

import { CARRIAGE_RETURN } from "../../constants";

export default class EndOfLineMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const html = CARRIAGE_RETURN;  ///

    return html;
  }

  createDOMElement(context) {
    const content = CARRIAGE_RETURN, ///
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    this.setDOMElement(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EndOfLineMarkdownNode, ruleName, childNodes, opacity); }
}
