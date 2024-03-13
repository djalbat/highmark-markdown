"use strict";

import contentMixins from "../../mixins/content";

import MarkdownNode from "../markdown";

class InlineTextMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const content = this.getContent(context),
          html = content; ///

    return html;
  }

  createDOMElement(context) {
    const content = this.getContent(context),
          domElement = document.createTextNode(content);

    this.setDOMElement(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(InlineTextMarkdownNode, ruleName, childNodes, ambiguous); }
}

Object.assign(InlineTextMarkdownNode.prototype, contentMixins);

export default InlineTextMarkdownNode;