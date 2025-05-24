"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../mixins/node";

class MarkdownStyleNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, ...remainingArguments) {
    if (opacity === undefined) {
      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = MarkdownStyleNode; ///
    }

    const markdownStyleNode = NonTerminalNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, ...remainingArguments);

    return markdownStyleNode;
  }
}

Object.assign(MarkdownStyleNode.prototype, nodeMixins);

export default MarkdownStyleNode;
