"use strict";

import MarkdownNode from "../../node/markdown";

export default class FootnotesMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const html = null;

    return html;
  }

  createDOMElement(context) {
    const domElement = null;

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesMarkdownNode, ruleName, childNodes, opacity); }
}
