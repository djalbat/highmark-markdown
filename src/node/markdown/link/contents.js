"use strict";

import MarkdownNode from "../../../node/markdown";

import { CONTENTS_LINK_RULE_NAME } from "../../../ruleNames";

export default class ContentsLinkMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, opacity, precedence, domElement, identifier) {
    super(ruleName, childNodes, opacity, precedence, domElement);

    this.identifier = identifier;
  }

  getIdentifier() {
    return this.identifier;
  }

  clone() { return super.clone(this.identifier); }

  static fromLineReplacementAndIdentifier(lineReplacement, identifier) {
      const lineMarkdownNode = lineReplacement.getLineMarkdownNode(),
            ruleName = CONTENTS_LINK_RULE_NAME,
            childNodes = [
              lineMarkdownNode
            ],
            opacity = null,
            contentsLinkMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, identifier);

    return contentsLinkMarkdownNode;
  }
}
