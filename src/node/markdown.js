"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../mixins/node";

class MarkdownNode extends NonTerminalNode {
  isDivisionMarkdownNode() {
    const divisionMarkdownNode = false;

    return divisionMarkdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, ...remainingArguments) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, ...remainingArguments); }
}

Object.assign(MarkdownNode.prototype, nodeMixins);

export default MarkdownNode;
