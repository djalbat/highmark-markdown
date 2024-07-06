"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class ErrorMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;

    return html;
  }

  createDOMElement(context) {
    let domElement;

    const content = this.content(context),
          textNode  = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ErrorMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(ErrorMarkdownNode.prototype, contentMixins);

export default ErrorMarkdownNode;
