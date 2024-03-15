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

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(VerticalSpaceMarkdownNode, ruleName, childNodes, ambiguous); }
}

export default VerticalSpaceMarkdownNode;