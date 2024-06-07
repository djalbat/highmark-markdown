"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../../node/markdown";

const { second } = arrayUtilities;

export default class ContentsDirectiveMarkdownNode extends MarkdownNode {
  maximumLevel(context) {
    let maximumLevel = 1;

    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength> 1) {
      const secondChildNode = second(childNodes),
            terminalNode = secondChildNode, ///
            content = terminalNode.getContent();

      maximumLevel = Number(content); ///
    }

    return maximumLevel;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
