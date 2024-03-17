"use strict";

import contentMixins from "../../mixins/content";

import MarkdownNode from "../markdown";

class BlockTextMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const content = this.content(context),
          html = content; ///

    return html;
  }

  createDOMElement(context) {
    const content = this.content(context),
          domElement = document.createTextNode(content);

    this.setDOMElement(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(BlockTextMarkdownNode.prototype, contentMixins);

export default BlockTextMarkdownNode;
