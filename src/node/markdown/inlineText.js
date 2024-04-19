"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class InlineTextMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const content = this.content(context),
          html = content; ///

    return html;
  }

  createDOMElement(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    this.setDOMElement(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(InlineTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(InlineTextMarkdownNode.prototype, contentMixins);

export default InlineTextMarkdownNode;