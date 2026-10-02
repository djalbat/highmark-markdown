"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../mixins/node";
import tokenMixins from "../mixins/token";

class MarkdownStyleNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity, ...remainingArguments) {
    if (opacity === undefined) {
      opacity = precedence; ///

      precedence = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = MarkdownStyleNode; ///
    }

    const markdownStyleNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity, ...remainingArguments);

    return markdownStyleNode;
  }
}

Object.assign(MarkdownStyleNode.prototype, nodeMixins);
Object.assign(MarkdownStyleNode.prototype, tokenMixins);

export default MarkdownStyleNode;
