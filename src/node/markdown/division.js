"use strict";

import MarkdownNode from "../../node/markdown";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { ID_ATTRIBUTE_NAME } from "../../attributeNames";
import { renumberLinkMarkdownNodes, renumberLinkMarkdownNodesHTML } from "../../utilities/link";

export default class DivisionMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, precedence, opacity, domElement, identifier) {
    super(ruleName, childNodes, precedence, opacity, domElement);

    this.identifier = identifier;
  }

  getIdentifier() {
    return this.identifier;
  }

  adjustIndent(indent) {
    return indent;
  }

  attributeName(context) {
    const attributeName = ID_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = this.identifier; ///

    return attributeValue;
  }

  asHTML(indent, context) {
    const { divisionIdentifier = null } = context;

    this.identifier = divisionIdentifier; ///

    const html = super.asHTML(indent, context);

    return html;
  }

  childNodesAsHTML(indent, context) {
    const divisionMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    let childNodesHTML = super.childNodesAsHTML(indent, context);

    if (footnotesListMarkdownNode !== null) {
      const footnotesListMarkdownNodeHTML = footnotesListMarkdownNode.asHTML(indent, context);

      childNodesHTML = `${childNodesHTML}${footnotesListMarkdownNodeHTML}`;

      childNodesHTML = renumberLinkMarkdownNodesHTML(childNodesHTML, divisionMarkdownNode, footnotesListMarkdownNode, context);
    }

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const divisionMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    super.createChildNodeDOMElements(context);

    if (footnotesListMarkdownNode !== null) {
      const footnotesListMarkdownNodeDOMElement = footnotesListMarkdownNode.createDOMElement(context),
            childNodeDOMElement = footnotesListMarkdownNodeDOMElement;  ///

      this.insertDOMElement(childNodeDOMElement);

      renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context);
    }
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const identifier = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, identifier);

    return divisionMarkdownNode;
  }
}

