"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../../node/markdown";

import { CONTENTS } from "../../../constants";

const { last } = arrayUtilities;

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
          lastChildNode = last(childNodes),
          terminalNode = lastChildNode, ///
          content = terminalNode.getContent();

    if (content !== CONTENTS) {
      maximumLevel = Number(content); ///
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
