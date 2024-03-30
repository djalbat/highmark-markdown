"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class AddressMarkdownNode extends MarkdownNode {
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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(AddressMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(AddressMarkdownNode.prototype, contentMixins);

export default AddressMarkdownNode;
