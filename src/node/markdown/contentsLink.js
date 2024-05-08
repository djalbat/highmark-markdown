"use strict";

import { arrayUtilities } from "necessary";

import ClonedNode from "../../clonedNode";
import MarkdownNode from "../../node/markdown";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";
import { CONTENTS_LINK_RULE_NAME } from "../../ruleNames";

const { push } = arrayUtilities;

export default class ContentsLinkMarkdownNode extends MarkdownNode {
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
    const attributeValue = `#${this.identifier}`;

    return attributeValue;
  }

  clone() {
    debugger

    return super.clone(this.identifier);
  }

  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    let contentsLinkMarkdownNode = null;

    const node = nestedHeadingMarkdownNode.getNode(),
          headingMarkdownNode = node;  ///

    if (headingMarkdownNode !== null) {
      const { tokens, replacementTokens } = context,
            node = headingMarkdownNode, ///
            clonedNode = ClonedNode.fromNodeAndTokens(node, tokens),
            clonedNodeTokens = clonedNode.getTokens();

      push(replacementTokens, clonedNodeTokens);  ///

      const childNodes = clonedNode.getChildNodes(),
            ruleName = CONTENTS_LINK_RULE_NAME,
            opacity = null,
            identifier = headingMarkdownNode.identifier(context);

      contentsLinkMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, identifier);
    }

    return contentsLinkMarkdownNode;
  }
}
