"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../../node/markdown";

const { fourth } = arrayUtilities;

export default class ContentsDirectiveMarkdownNode extends MarkdownNode {
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

  minimumPosition(context) {
    const { tokens } = context,
          firstSignificantToken = this.getFirstSignificantToken(),
          firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
          minimumPosition = firstSignificantTokenIndex; ///

    return minimumPosition;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
