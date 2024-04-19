"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class MarkerMarkdownNode extends MarkdownNode {
  number(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          numberTerminalNode = firstChildNode,  ///
          numberTerminalNodeContent = numberTerminalNode.getContent(),
          number = numberTerminalNodeContent;  ///

    return number;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(MarkerMarkdownNode, ruleName, childNodes, opacity); }
}
