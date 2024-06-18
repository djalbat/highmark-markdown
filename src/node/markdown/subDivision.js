"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import EmbedDirectivesSubDivisionReplacement from "../../replacement/subDivision/embedDirectives";

const { second } = arrayUtilities;

export default class SubDivisionMarkdownNode extends MarkdownNode {
  resolveEmbeddings(divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = this, ///
          embedDirectivesSubDivisionReplacement = EmbedDirectivesSubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

    if (embedDirectivesSubDivisionReplacement !== null) {
      const subDivisionMarkdownNodes = embedDirectivesSubDivisionReplacement.replaceSubDivisionMarkdownNode(divisionMarkdownNode, context);

      subDivisionMarkdownNodes.forEach((subDivisionMarkdownNode) => {
        subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
      });
    }
  }

  getDOMElement() {
    const secondMarkdownNode = this.getSecondMarkdownNode(),
          domElement = secondMarkdownNode.getDOMElement();

    return domElement;
  }

  lines(context) {
    const secondMarkdownNode = this.getSecondMarkdownNode(),
          lines = secondMarkdownNode.lines(context);

    return lines;
  }

  asHTML(indent, context) {
    const secondMarkdownNode = this.getSecondMarkdownNode(),
          html = secondMarkdownNode.asHTML(indent, context);

    return html;
  }

  createDOMElement(context) {
    const domElement = null,
          secondMarkdownNode = this.getSecondMarkdownNode();

    secondMarkdownNode.createDOMElement(context);

    return domElement;
  }

  getSecondMarkdownNode() {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          secondMarkdownNode = secondChildNode; ///

    return secondMarkdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity); }
}
