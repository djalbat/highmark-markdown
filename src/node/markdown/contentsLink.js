"use strict";

import { arrayUtilities } from "necessary";

import ClonedNode from "../../clonedNode";
import MarkdownNode from "../../node/markdown";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";
import { CONTENTS_LINK_RULE_NAME } from "../../ruleNames";

const { push } = arrayUtilities;

export default class ContentsLinkMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, opacity, precedence, domElement, tokens, identifier) {
    super(ruleName, childNodes, opacity, precedence, tokens, domElement);

    this.tokens = tokens;

    this.identifier = identifier;
  }

  getTokens(tokens = []) {
    push(tokens, this.tokens);

    return tokens;
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

    const tokens = this.tokens.map((token) => {
            token = token.clone();  ///

            return token;
          }),
          identifier = this.identifier;

    return super.clone(tokens, identifier);
  }

  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    let contentsLinkMarkdownNode = null;

    const node = nestedHeadingMarkdownNode.getNode(),
          headingMarkdownNode = node;  ///

    if (headingMarkdownNode !== null) {
      const node = headingMarkdownNode, ///
            clonedNode = ClonedNode.fromNode(node, context),
            childNodes = clonedNode.getChildNodes(),
            ruleName = CONTENTS_LINK_RULE_NAME,
            opacity = null,
            tokens = clonedNode.getTokens(),
            identifier = headingMarkdownNode.identifier(context);

      contentsLinkMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, tokens, identifier);
    }

    return contentsLinkMarkdownNode;
  }
}
