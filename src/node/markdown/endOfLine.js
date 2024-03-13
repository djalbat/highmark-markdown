"use strict";

import MarkdownNode from "../../node/markdown";

export default class EndOfLineMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const content = this.getContent(context),
          html = content; ///

    return html;
  }

  createDOMElement(context) {
    const content = this.getContent(context),
          domElement = document.createTextNode(content);

    this.setDOMElement(domElement);

    return domElement;
  }

  getContent(context) {
    const firstSignificantToken = this.getFirstSignificantToken(),
          endOfLineToken = firstSignificantToken, ///
          content = endOfLineToken.getContent();

    return content;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(EndOfLineMarkdownNode, ruleName, childNodes, ambiguous); }
}
