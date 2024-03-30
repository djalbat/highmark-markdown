"use strict";

import MarkdownNode from "../markdown";
import contentMixins from "../../mixins/content";

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

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(InlineTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(InlineTextMarkdownNode.prototype, contentMixins);

export default InlineTextMarkdownNode;