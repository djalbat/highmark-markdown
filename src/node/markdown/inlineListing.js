"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

import { removeBackticks } from "../../utilities/string";

class InlineListingMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    let content = this.content(context);

    content = removeBackticks(content); ///

    const childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    let content = this.content(context);

    content = removeBackticks(content); ///

    const textNode = document.createTextNode(content),
          domElement = textNode; ///

    this.addDOMElement(domElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(InlineListingMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(InlineListingMarkdownNode.prototype, contentMixins);

export default InlineListingMarkdownNode;
