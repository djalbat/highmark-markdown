"use strict";

import MarkdownNode from "../../node/markdown";

import { CONTENTS_LIST_RULE_NAME } from "../../ruleNames";

export default class ContentsListMarkdownNode extends MarkdownNode {
  static fromNothing() {
    const ruleName = CONTENTS_LIST_RULE_NAME,
          childNodes = [],
          opacity = null,
          contentsListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);

    return contentsListMarkdownNode;
  }
}
