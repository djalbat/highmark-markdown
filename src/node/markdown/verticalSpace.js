"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class VerticalSpaceMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          endOfLineTerminalNode = firstChildNode, ///
          endOfLineTerminalNodeContent = endOfLineTerminalNode.getContent(),
          html = endOfLineTerminalNodeContent; ///

    return html;
  }

  createDOMElement(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          endOfLineTerminalNode = firstChildNode, ///
          endOfLineTerminalNodeContent = endOfLineTerminalNode.getContent(),
          content = endOfLineTerminalNodeContent, ///
          domElement = document.createTextNode(content);

    this.setDOMElement(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(VerticalSpaceMarkdownNode, ruleName, childNodes, opacity); }
}
