"use strict";

import { Node } from "occam-dom";

import nodeMixins from "../mixins/node";

import { EMPTY_STRING, DOUBLE_SPACE } from "../constants";

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

  adjustIndent(indent) {
    indent = (indent === null) ?
               EMPTY_STRING :
                `${DOUBLE_SPACE}${indent}`;

    return indent;
  }

  asCSS(indent, context) {
    if (context === undefined) {
      context = indent; ///

      indent = EMPTY_STRING;
    }

    let css;

    indent = this.adjustIndent(indent);

    debugger


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
