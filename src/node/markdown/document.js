"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { divisionMarkdownNodesFromNode } from "../../utilities/markdown";

const { first } = arrayUtilities;

export default class DocumentMarkdownNode extends MarkdownNode {
  resolve(context) {
    const firstDivisionMarkdownNode = this.getFirstDivisionMarkdownNode();

    if (firstDivisionMarkdownNode === null) {
      return;
    }

    const documentMarkdownNode = this; ///

    firstDivisionMarkdownNode.resolveIncludes(documentMarkdownNode, context);

    this.forEachDivisionMarkdownNode((divisionMarkdownNode) => {
      divisionMarkdownNode.resolveIgnored(documentMarkdownNode, context);
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
    let firstDivisionMarkdownNode = null;

    const divisionMarkdownNodes = this.getDivisionMarkdownNodes(),
          divisionMarkdownNodesLength = divisionMarkdownNodes.length;

    if (divisionMarkdownNodesLength > 0) {
      firstDivisionMarkdownNode = first(divisionMarkdownNodes);
    }

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
          documentMarkdownNode = MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(DocumentMarkdownNode, ruleName, childNodes, opacity, precedence);

    return documentMarkdownNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(DocumentMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
