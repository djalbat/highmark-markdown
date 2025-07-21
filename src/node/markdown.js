"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../mixins/node";

class MarkdownNode extends NonTerminalNode {
  getParentMarkdownNode() {
    const parentNode = this.getParentNode(),
          parentMarkdownNode = parentNode;  ///

    return parentMarkdownNode;
  }

  getChildMarkdownNodes() {
    const childNodes = this.getChildNodes(),
          childMarkdownNodes = childNodes;  ///

    return childMarkdownNodes;
  }

  getAncestorMarkdownNodes() {
    const ancestorNodes = this.getAncestorNodes(),
          ancestorMarkdownNodes = ancestorNodes;  ///

    return ancestorMarkdownNodes;
  }

  setParentMarkdownNode(parentMarkdownNode) {
    const parentNode = parentMarkdownNode;  ///

    this.setParentNode(parentNode);
  }

  someDescendantMarkdownNode(callback) { return this.someDescendantNode(callback); }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence, ...remainingArguments) {
    if (precedence === undefined) {
      precedence = opacity; ///

      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = MarkdownNode; ///
    }

    const markdownNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence, ...remainingArguments);

    return markdownNode;
  }
}

Object.assign(MarkdownNode.prototype, nodeMixins);

export default MarkdownNode;
