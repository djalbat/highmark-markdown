"use strict";

import { Node } from "occam-dom";

import nodeMixins from "../mixins/node";

import { EMPTY_STRING } from "../constants";

class CSSNode extends Node {
  getMarkdownStyleNode() {
    const outerNode = this.getOuterNode(),
          markdownStyleNode = outerNode; ///

    return markdownStyleNode;
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

    const node = Node.fromNothing(Class, ...remainingArguments);

    return node;
  }

  static fromOuterNode(Class, outerNode, ...remainingArguments) {
    if (outerNode === undefined) {
      outerNode = Class;  ///

      Class = CSSNode; ///
    }

    const node = Node.fromOuterNode(Class, outerNode, ...remainingArguments);

    return node;
  }

  static fromChildNodes(Class, childNodes, ...remainingArguments) {
    if (childNodes === undefined) {
      childNodes = Class;  ///

      Class = CSSNode; ///
    }

    const node = Node.fromChildNodes(Class, childNodes, ...remainingArguments);

    return node;
  }
}

Object.assign(CSSNode.prototype, nodeMixins);

export default CSSNode;
