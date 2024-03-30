"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

import { shave } from "../../utilities/string";

class InlineListingMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    let content = this.content(context);

    content = shave(content); ///

    const html = content; ///

    return html;
  }

  createDOMElement(context) {
    let content = this.content(context);

    content = shave(content); ///

    const domElement = document.createTextNode(content);

    this.setDOMElement(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(InlineListingMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(InlineListingMarkdownNode.prototype, contentMixins);

export default InlineListingMarkdownNode;
