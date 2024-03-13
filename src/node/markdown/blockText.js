"use strict";

import contentMixins from "../../mixins/content";

import MarkdownNode from "../markdown";

class BlockTextMarkdownNode extends MarkdownNode {
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

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(BlockTextMarkdownNode, ruleName, childNodes, ambiguous); }
}

Object.assign(BlockTextMarkdownNode.prototype, contentMixins);

export default BlockTextMarkdownNode;
