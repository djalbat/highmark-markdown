"use strict";

import MarkdownNode from "../../node/markdown";

import { CARRIAGE_RETURN } from "../../constants";

export default class VerticalSpaceMarkdownNode extends MarkdownNode {
  content(context) {
    const content = CARRIAGE_RETURN;

    return content;
  }

  static lines = 0;

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(VerticalSpaceMarkdownNode, ruleName, childNodes, opacity); }
}
