"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../mixins/node";

class MarkdownNode extends NonTerminalNode {
  isDivisionMarkdownNode() {
    const divisionMarkdownNode = false;

    return divisionMarkdownNode;
  }

  isPlainTextMarkdownNode() {
    const plainTextMarkdownNode = false;

    return plainTextMarkdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, ...remainingArguments) {
    const domElement = null,
          markdownNode = NonTerminalNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, domElement, ...remainingArguments);

    return markdownNode;
  }
}

Object.assign(MarkdownNode.prototype, nodeMixins);

export default MarkdownNode;
