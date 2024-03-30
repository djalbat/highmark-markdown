"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class URLMarkdownNode extends MarkdownNode {
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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(URLMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(URLMarkdownNode.prototype, contentMixins);

export default URLMarkdownNode;
