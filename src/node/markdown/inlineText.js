"use strict";

import contentMixins from "../../mixins/content";

import MarkdownNode from "../markdown";

class InlineTextMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const content = this.content(context),
          html = content; ///

    return html;
  }

  createDOMElement(context) {
    const content = this.content(context),
          domElement = document.createTextNode(content);

    this.setDOMElement(domElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(InlineTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(InlineTextMarkdownNode.prototype, contentMixins);

export default InlineTextMarkdownNode;