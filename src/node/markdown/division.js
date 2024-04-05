"use strict";

import MarkdownNode from "../../node/markdown";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { ID_ATTRIBUTE_NAME } from "../../attributeNames";
import { renumberLinkMarkdownNodes, renumberLinkMarkdownNodesHTML } from "../../utilities/link";

export default class DivisionMarkdownNode extends MarkdownNode {
  adjustIndent(indent) {
    return indent;
  }

  attributeName(context) {
    const attributeName = ID_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const { divisionIdentifier = null } = context,
          attributeValue = divisionIdentifier; ///

    return attributeValue;
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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity); }
}

