"use strict";

import contentMixins from "../../mixins/content";

import MarkdownNode from "../../node/markdown";

class VerticalSpaceMarkdownNode extends MarkdownNode {
  asHTML(index, context) {
    const content = this.content(context),
          html = content;

    return html;
  }

  createDOMElement(context) {
    const content = this.content(context),
          domElement = document.createTextNode(content);

    this.setDOMElement(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(VerticalSpaceMarkdownNode, ruleName, childNodes, ambiguous); }
}

Object.assign(VerticalSpaceMarkdownNode.prototype, contentMixins);

export default VerticalSpaceMarkdownNode;