"use strict";

import MarkdownNode from "../../node/markdown";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { EMPTY_STRING } from "../../constants";
import { renumberLinkMarkdownNodes, renumberLinkMarkdownNodesHTML } from "../../utilities/link";

export default class DocumentMarkdownNode extends MarkdownNode {
  adjustIndent(indent) {
    indent = EMPTY_STRING;

    return indent;
  }

  childNodesAsHTML(indent, context) {
    const documentMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDocumentMarkdownNode(documentMarkdownNode, context);

    let childNodesHTML = super.childNodesAsHTML(indent, context);

    if (footnotesListMarkdownNode !== null) {
      const footnotesListMarkdownNodeHTML = footnotesListMarkdownNode.asHTML(indent, context);

      childNodesHTML = `${childNodesHTML}${footnotesListMarkdownNodeHTML}`;

      childNodesHTML = renumberLinkMarkdownNodesHTML(childNodesHTML, documentMarkdownNode, footnotesListMarkdownNode, context);
    }

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const documentMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDocumentMarkdownNode(documentMarkdownNode, context);

    super.createChildNodeDOMElements(context);

    if (footnotesListMarkdownNode !== null) {
      const footnotesListMarkdownNodeDOMElement = footnotesListMarkdownNode.createDOMElement(context),
            childNodeDOMElement = footnotesListMarkdownNodeDOMElement;  ///

      this.insertDOMElement(childNodeDOMElement);

      renumberLinkMarkdownNodes(documentMarkdownNode, footnotesListMarkdownNode, context);
    }
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(DocumentMarkdownNode, ruleName, childNodes, opacity); }
}

