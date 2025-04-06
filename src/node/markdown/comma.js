"use strict";

import MarkdownNode from "../../node/markdown";

import { COMMA } from "../../constants";

export default class CommaMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    return domElement;
  }

  content(context) {
    const content = COMMA; ///

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(CommaMarkdownNode, ruleName, childNodes, opacity); }
}
