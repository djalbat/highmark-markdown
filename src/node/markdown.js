"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../mixins/node";
import tokenMixins from "../mixins/token";

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

  getChildMarkdownNodesByRuleName(...ruleNames) {
    const childMarkdownNodes = this.filterChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const markdownNode = childNode, ///
              ruleName = markdownNode.getRuleName(),
              ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

        if (ruleNamesIncludesRuleName) {
          return true;
        }
      }
    });

    return childMarkdownNodes;
  }

  setParentMarkdownNode(parentMarkdownNode) {
    const parentNode = parentMarkdownNode;  ///

    this.setParentNode(parentNode);
  }

  someDescendantMarkdownNode(callback) { return this.someDescendantNode(callback); }

  static fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity, ...remainingArguments) {
    if (opacity === undefined) {
      opacity = precedence; ///

      precedence = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = MarkdownNode; ///
    }

    const markdownNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity, ...remainingArguments);

    return markdownNode;
  }
}

Object.assign(MarkdownNode.prototype, nodeMixins);
Object.assign(MarkdownNode.prototype, tokenMixins);

export default MarkdownNode;
