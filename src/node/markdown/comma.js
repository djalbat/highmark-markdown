"use strict";

import MarkdownNode from "../../node/markdown";

import { COMMA } from "../../constants";

export default class CommaMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const content = this.content(context),
          html = content; ///

    return html;
  }

  createDOMElement(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    this.setDOMElement(domElement);

    return domElement;
  }

  content(context) {
    const content = COMMA; ///

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(CommaMarkdownNode, ruleName, childNodes, opacity); }
}
