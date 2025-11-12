"use strict";

import { Node } from "occam-dom";

import nodeMixins from "../mixins/node";

import { EMPTY_STRING } from "../constants";

class CSSNode extends Node {
  matchMarkdownStyleRuleName(markdownStyleRuleName) {
    const markdownStyleRuleNameA = markdownStyleRuleName; ///

    markdownStyleRuleName = this.getMarkdownStyleRuleName();

    const markdownStyleRuleNameB = markdownStyleRuleName, ///
          markdownStyleRuleNameMatches = (markdownStyleRuleNameA === markdownStyleRuleNameB);

    return markdownStyleRuleNameMatches;
  }

  getMarkdownStyleRuleName() {
    const markdownStyleNode = this.getMarkdownStyleNode(),
          markdownStyleNodeRuleName = markdownStyleNode.getRuleName(),
          markdownStyleRuleName = markdownStyleNodeRuleName;  ///

    return markdownStyleRuleName;
  }

  getMarkdownStyleNode() {
    const outerNode = this.getOuterNode(),
          markdownStyleNode = outerNode; ///

    return markdownStyleNode;
  }

  getParentCSSNode() {
    const parentNode = this.getParentNode(),
          parentCSSNode = parentNode; ///

    return parentCSSNode;
  }

  getChildCSSNodes() {
    const childNodes = this.getChildNodes(),
          childCSSNodes = childNodes; ///

    return childCSSNodes;
  }

  getRuleName() {
    const markdownStyleNode = this.getMarkdownStyleNode(),
          ruleName = markdownStyleNode.getRuleName();

    return ruleName;
  }

  isTerminalNode() {
    const terminalNode = false;

    return terminalNode;
  }

  isNonTerminalNode() {
    const nonTerminalNode = true;

    return nonTerminalNode;
  }

  asCSS(context) {
    const css = this.reduceChildNode((css, childNode) => {
      const childNodeCSS = childNode.asCSS(context);

      css = `${css}${childNodeCSS}`;

      return css;
    }, EMPTY_STRING);

    return css;
  }

  static fromNothing(Class, ...remainingArguments) {
    if (Class === undefined) {
      Class = CSSNode; ///
    }

    const cssNode = Node.fromNothing(Class, ...remainingArguments);

    return cssNode;
  }

  static fromOuterNode(Class, outerNode, ...remainingArguments) {
    if (outerNode === undefined) {
      outerNode = Class;  ///

      Class = CSSNode; ///
    }

    const cssNode = Node.fromOuterNode(Class, outerNode, ...remainingArguments);

    return cssNode;
  }

  static fromChildCSSNodes(Class, childCssNodes, ...remainingArguments) {
    if (childCssNodes === undefined) {
      childCssNodes = Class;  ///

      Class = CSSNode; ///
    }

    const childNodes = childCssNodes, ///
          cssNode = Node.fromChildNodes(Class, childNodes, ...remainingArguments);

    return cssNode;
  }
}

Object.assign(CSSNode.prototype, nodeMixins);

export default CSSNode;
