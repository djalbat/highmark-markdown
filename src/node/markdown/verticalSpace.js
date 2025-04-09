"use strict";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";

export default class VerticalSpaceMarkdownNode extends MarkdownNode {
  content(context) {
    const content = this.reduceChildNode((content, childNode) => {
      const childNodeContent = childNode.getContent();

      content = `${content}${childNodeContent}`;

      return content;
    }, EMPTY_STRING);

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(VerticalSpaceMarkdownNode, ruleName, childNodes, opacity); }
}
