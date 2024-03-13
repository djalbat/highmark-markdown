"use strict";

import MarkdownNode from "../../node/markdown";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { renumberLinkMarkdownNodes } from "../../utilities/link";

export default class DocumentMarkdownNode extends MarkdownNode {
  adjustIndent(indent) {
    return indent;
  }

  createChildNodeDOMElements(context) {
    const documentMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDocumentMarkdownNode(documentMarkdownNode, context);

    super.createChildNodeDOMElements(context);

    if (footnotesListMarkdownNode !== null) {
      const domElement = footnotesListMarkdownNode.createDOMElement(context);

      this.insertDOMElement(domElement);

      renumberLinkMarkdownNodes(documentMarkdownNode, footnotesListMarkdownNode);
    }
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(DocumentMarkdownNode, ruleName, childNodes, ambiguous); }
}

