"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class BlockTextMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const leftTrimmed = false,
          rightTrimmed = false,
          content = this.content(context, leftTrimmed, rightTrimmed),
          html = content; ///

    return html;
  }

  createDOMElement(context) {
    const leftTrimmed = false,
          rightTrimmed = false,
          content = this.content(context, leftTrimmed, rightTrimmed),
          textNode = document.createTextNode(content),
          domElement = textNode;

    this.setDOMElement(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(BlockTextMarkdownNode.prototype, contentMixins);

export default BlockTextMarkdownNode;
