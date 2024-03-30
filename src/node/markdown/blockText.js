"use strict";

import contentMixins from "../../mixins/content";

import MarkdownNode from "../markdown";

class BlockTextMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const trimmed = false,
          content = this.content(context, trimmed),
          html = content; ///

    return html;
  }

  createDOMElement(context) {
    const trimmed = false,
          content = this.content(context),
          domElement = document.createTextNode(content, trimmed);

    this.setDOMElement(domElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(BlockTextMarkdownNode.prototype, contentMixins);

export default BlockTextMarkdownNode;
