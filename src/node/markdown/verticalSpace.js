"use strict";

import { EpsilonNode } from "occam-parsers";

import MarkdownNode from "../../node/markdown";

import { CARRIAGE_RETURN } from "../../constants";
import { VERTICAL_SPACE_RULE_NAME } from "../../ruleNames";

export default class VerticalSpaceMarkdownNode extends MarkdownNode {
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

  static fromNothing() {
    const epsilonNode = EpsilonNode.fromNothing(),
          ruleName = VERTICAL_SPACE_RULE_NAME,
          childNodes = [
            epsilonNode
          ],
          opacity = null,
          verticalSpaceMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(VerticalSpaceMarkdownNode, ruleName, childNodes, opacity);

    return verticalSpaceMarkdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(VerticalSpaceMarkdownNode, ruleName, childNodes, opacity); }
}
