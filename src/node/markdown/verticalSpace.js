"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class VerticalSpaceMarkdownNode extends MarkdownNode {
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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(VerticalSpaceMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(VerticalSpaceMarkdownNode.prototype, contentMixins);

export default VerticalSpaceMarkdownNode;