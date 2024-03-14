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

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(DocumentMarkdownNode, ruleName, childNodes, ambiguous); }
}

