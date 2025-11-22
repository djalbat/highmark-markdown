"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class DocumentMarkdownNode extends MarkdownNode {
  resolve(context) {
    const documentMarkdownNode = this,  ///
          divisionMarkdownNode = this.getDivisionMarkdownNode();

    divisionMarkdownNode.resolveIncludes(documentMarkdownNode, context);

    this.forEachDivisionMarkdownNode((divisionMarkdownNode) => {
      divisionMarkdownNode.resolveIgnored(documentMarkdownNode, context);
    });

    this.forEachDivisionMarkdownNode((divisionMarkdownNode) => {
      divisionMarkdownNode.resolveEmbeddings(context);
    });
  }

  getDivisionMarkdownNode() {
    let divisionMarkdownNode = null;

    const multiplicity = this.getMultiplicity();

    if (multiplicity === 1) {
      const divisionMarkdownNodes = this.getDivisionMarkdownNodes(),
            firstDivisionMarkdownNode = first(divisionMarkdownNodes);

      divisionMarkdownNode = firstDivisionMarkdownNode; ///
    }

    return divisionMarkdownNode;
  }

  getDivisionMarkdownNodes() {
    const childNodes = this.getChildNodes(),
          divisionMarkdownNodes = childNodes; ///

    return divisionMarkdownNodes;
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
