"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { fourth } = arrayUtilities;

export default class ContentsMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const html = null;

    return html;
  }

  createDOMElement(context) {
    const domElement = null;

    return domElement;
  }

  maximumLevel(context) {
    let maximumLevel = 1;

    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength === 5) {
      const fourthChildNode = fourth(childNodes),
            numberTerminalNode = fourthChildNode,  ///
            numberTerminalNodeContent = numberTerminalNode.getContent();

      maximumLevel = Number(numberTerminalNodeContent);
    }

    return maximumLevel;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsMarkdownNode, ruleName, childNodes, opacity); }
}
