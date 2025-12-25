"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../mixins/node";
import tokenMixins from "../mixins/token";

class MarkdownStyleNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence, ...remainingArguments) {
    if (precedence === undefined) {
      precedence = opacity; ///

      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = MarkdownStyleNode; ///
    }

    const markdownStyleNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence, ...remainingArguments);

    return markdownStyleNode;
  }
}

Object.assign(MarkdownStyleNode.prototype, nodeMixins);
Object.assign(MarkdownStyleNode.prototype, tokenMixins);

export default MarkdownStyleNode;
