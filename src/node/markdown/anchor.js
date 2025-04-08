"use strict";

import { EpsilonNode } from "occam-parsers";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";
import { ANCHOR_RULE_NAME } from "../../ruleNames";

export default class AnchorMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, opacity, precedence, domElement, prepend, identifier) {
    super(ruleName, childNodes, opacity, precedence, domElement, prepend);

    this.prepend = prepend;
    this.identifier = identifier;
  }

  getPrepend() {
    return this.prepend;
  }

  getIdentifier() {
    return this.identifier;
  }

  content(context) {
    const content = EMPTY_STRING;

    return content;
  }

  clone() { return super.clone(this.prepend, this.identifier); }

  static fromPrependAndIdentifier(prepend, identifier) {
    const epsilonNode = EpsilonNode.fromNothing(),
          ruleName = ANCHOR_RULE_NAME,
          childNodes = [
            epsilonNode
          ],
          opacity = null,
          anchorMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(AnchorMarkdownNode, ruleName, childNodes, opacity, prepend, identifier);

    return anchorMarkdownNode;
  }
}
