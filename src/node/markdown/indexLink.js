"use strict";

import MarkdownNode from "../../node/markdown";

import { INDEX_PREPEND } from "../../prepends";
import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";
import { INDEX_LINK_RULE_NAME } from "../../ruleNames";

export default class IndexLinkMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, opacity, precedence, domElement, identifier) {
    super(ruleName, childNodes, opacity, precedence, domElement);

    this.identifier = identifier;
  }

  getIdentifier() {
    return this.identifier;
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const prepend = INDEX_PREPEND,
          attributeValue = `#${prepend}-${this.identifier}`;

    return attributeValue;
  }

  clone() { return super.clone(this.identifier); }

  static fromLineReplacementAndIdentifier(lineReplacement, identifier) {
      const lineMarkdownNode = lineReplacement.getLineMarkdownNode(),
            ruleName = INDEX_LINK_RULE_NAME,
            childNodes = [
              lineMarkdownNode
            ],
            opacity = null,
            indexLinkMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(IndexLinkMarkdownNode, ruleName, childNodes, opacity, identifier);

    return indexLinkMarkdownNode;
  }
}
