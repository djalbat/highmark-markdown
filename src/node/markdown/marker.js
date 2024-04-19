"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class MarkerMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = `${content}\n`;

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode; ///

    this.addDOMElement(domElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(MarkerMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(MarkerMarkdownNode.prototype, contentMixins);

export default MarkerMarkdownNode;