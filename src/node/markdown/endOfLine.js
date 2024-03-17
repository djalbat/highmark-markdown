"use strict";

import MarkdownNode from "../../node/markdown";

export default class EndOfLineMarkdownNode extends MarkdownNode {
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

  content(context) {
    const firstSignificantToken = this.getFirstSignificantToken(),
          endOfLineToken = firstSignificantToken, ///
          content = endOfLineToken.getContent();

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EndOfLineMarkdownNode, ruleName, childNodes, opacity); }
}
