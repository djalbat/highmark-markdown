"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { divisionMarkdownNodesFromNode } from "../../utilities/markdown";

const { first } = arrayUtilities;

export default class TopmostMarkdownNode extends MarkdownNode {
  resolve(context) {
    const firstDivisionMarkdownNode = this.getFirstDivisionMarkdownNode();

    if (firstDivisionMarkdownNode === null) {
      return;
    }

    const topmostMarkdownNode = this; ///

    firstDivisionMarkdownNode.resolveIncludes(topmostMarkdownNode, context);

    this.forEachDivisionMarkdownNode((divisionMarkdownNode) => {
      divisionMarkdownNode.resolveIgnored(topmostMarkdownNode, context);
    });

    this.forEachDivisionMarkdownNode((divisionMarkdownNode) => {
      divisionMarkdownNode.resolveEmbeddings(context);
    });
  }

  getDivisionMarkdownNodes() {
    const node = this,  ///
          divisionMarkdownNodes = divisionMarkdownNodesFromNode(node);

    return divisionMarkdownNodes;
  }

  getFirstDivisionMarkdownNode() {
    const divisionMarkdownNodes = this.getDivisionMarkdownNodes(),
          firstDivisionMarkdownNode = first(divisionMarkdownNodes) || null;

    return firstDivisionMarkdownNode;
  }

  forEachDivisionMarkdownNode(callback) {
    const divisionMarkdownNodes = this.getDivisionMarkdownNodes();

    divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
      callback(divisionMarkdownNode);
    });
  }

  removeDivisionMarkdownNode(divisionMarkdownNode) {
    const childNode = divisionMarkdownNode;  ///

    this.removeChildNode(childNode);
  }

  static fromChildMarkdownNodes(childMarkdownNodes) {
    const ruleName = null,
          childNodes = childMarkdownNodes,  ///
          opacity = null,
          precedence = null,
          topmostMarkdownNode = MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(TopmostMarkdownNode, ruleName, childNodes, opacity, precedence);

    return topmostMarkdownNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(TopmostMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
