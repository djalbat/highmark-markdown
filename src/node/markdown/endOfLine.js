"use strict";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";

export default class EndOfLineMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const html = EMPTY_STRING;  ///

    return html;
  }

  createDOMElement(context) {
    const content = EMPTY_STRING, ///
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    this.setDOMElement(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EndOfLineMarkdownNode, ruleName, childNodes, opacity); }
}
