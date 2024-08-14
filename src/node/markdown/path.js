"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class PathMarkdownNode extends MarkdownNode {
  getContent() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          pathTerminalNode = firstChildNode,  ///
          pathTerminalNodeContent = pathTerminalNode.getContent(),
          content = pathTerminalNodeContent;  ///

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(PathMarkdownNode, ruleName, childNodes, opacity); }
}
