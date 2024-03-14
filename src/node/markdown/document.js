"use strict";

import MarkdownNode from "../../node/markdown";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { EMPTY_STRING } from "../../constants";
import { renumberLinkMarkdownNodes } from "../../utilities/link";

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
      renumberLinkMarkdownNodes(documentMarkdownNode, footnotesListMarkdownNode, context);

      const footnotesListMarkdownNodeHTML = footnotesListMarkdownNode.asHTML(indent, context);

      childNodesHTML = `${childNodesHTML}${footnotesListMarkdownNodeHTML}`;
    }

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const documentMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDocumentMarkdownNode(documentMarkdownNode, context);

    super.createChildNodeDOMElements(context);

    if (footnotesListMarkdownNode !== null) {
      renumberLinkMarkdownNodes(documentMarkdownNode, footnotesListMarkdownNode, context);

      const footnotesListMarkdownNodeDOMElement = footnotesListMarkdownNode.createDOMElement(context),
            childNodeDOMElement = footnotesListMarkdownNodeDOMElement;  ///

      this.insertDOMElement(childNodeDOMElement);
    }
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(DocumentMarkdownNode, ruleName, childNodes, ambiguous); }
}

