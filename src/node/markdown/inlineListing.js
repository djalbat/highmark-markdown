"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

import { shave } from "../../utilities/string";

class InlineListingMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    let content = this.content(context);

    content = shave(content); ///

    const childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    let content = this.content(context);

    content = shave(content); ///

    const childNodeDOMElement = document.createTextNode(content);

    this.insertDOMElement(childNodeDOMElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(InlineListingMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(InlineListingMarkdownNode.prototype, contentMixins);

export default InlineListingMarkdownNode;
