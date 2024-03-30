"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class ErrorMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content;  ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const content = this.content(context),
          childNodeDOMElement = document.createTextNode(content);

    this.insertDOMElement(childNodeDOMElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ErrorMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(ErrorMarkdownNode.prototype, contentMixins);

export default ErrorMarkdownNode;
