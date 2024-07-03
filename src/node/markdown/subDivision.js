"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import EmbedDirectivesSubDivisionReplacement from "../../replacement/subDivision/embedDirectives";
import IncludeDirectivesSubDivisionReplacement from "../../replacement/subDivision/includeDirectives";

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

  resolveIncludes(divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = this, ///
          includeDirectivesSubDivisionReplacement = IncludeDirectivesSubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

    if (includeDirectivesSubDivisionReplacement !== null) {
      includeDirectivesSubDivisionReplacement.removeSubDivisionMarkdownNode(divisionMarkdownNode, context);
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

  asPlainText(context) {
    const secondMarkdownNode = this.getSecondMarkdownNode(),
          plainText = secondMarkdownNode.asPlainText(context);

    return plainText;
  }

  createDOMElement(context) {
    const secondMarkdownNode = this.getSecondMarkdownNode(),
          domElement = null;

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
