"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class ClassNameMarkdownNode extends MarkdownNode {
  getClassName() {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          identifierTerminalNode = secondChildNode, ///
          identifierTerminalNodeContent = identifierTerminalNode.getContent(),
          className = identifierTerminalNodeContent; ///

    return className;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(ClassNameMarkdownNode, ruleName, childNodes, ambiguous); }
}
