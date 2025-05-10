"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../mixins/node";

class MarkdownStyleNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, ...remainingArguments) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, ...remainingArguments); }
}

Object.assign(MarkdownStyleNode.prototype, nodeMixins);

export default MarkdownStyleNode;
