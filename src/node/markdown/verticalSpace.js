"use strict";

import MarkdownNode from "../../node/markdown";

class VerticalSpaceMarkdownNode extends MarkdownNode {
  asHTML(index, context) {
    const html = null;

    return html;
  }

  createDOMElement(context) {
    const domElement = null;

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(VerticalSpaceMarkdownNode, ruleName, childNodes, opacity); }
}

export default VerticalSpaceMarkdownNode;