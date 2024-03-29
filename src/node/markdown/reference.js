"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class ReferenceMarkdownNode extends MarkdownNode {
  identifier(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          identiierTerminalNode = secondChildNode,  ///
          identiierTerminalNodeContent = identiierTerminalNode.getContent(),
          identifier = identiierTerminalNodeContent; ///

    return identifier;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ReferenceMarkdownNode, ruleName, childNodes, opacity); }
}
