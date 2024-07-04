"use strict";

import MarkdownNode from "../../node/markdown";

import { CARRIAGE_RETURN } from "../../constants";

export default class VerticalSpaceMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    const content = CARRIAGE_RETURN, ///
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    return domElement;
  }

  asHTML(indent, context) {
    const html = CARRIAGE_RETURN;  ///

    return html;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(VerticalSpaceMarkdownNode, ruleName, childNodes, opacity); }
}
