"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import ReplacementNodeAndTokens from "../../replacementNodeAndTokens";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";
import { CONTENTS_LINK_RULE_NAME } from "../../ruleNames";

const { last, push } = arrayUtilities;

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

  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          lastChildNode = last(childNodes),
          markedTextChildNode = lastChildNode,  ///
          markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context),
          childNodesHTML = markedTextChildNodeChildNodesHTML;

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const domElement = this.getDOMElement(),
          childNodes = this.getChildNodes(),
          lastChildNode = last(childNodes),
          markedTextChildNode = lastChildNode;  ///

    markedTextChildNode.createChildNodeDOMElements(domElement, context);
  }

  clone() {
    const tokens = this.tokens.map((token) => {
      token = token.clone();  ///

      return token;
    });

    return super.clone(tokens, this.identifier);
  }

  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    let contentsLinkMarkdownNode = null;

    const node = nestedHeadingMarkdownNode.getNode(),
          headingMarkdownNode = node;  ///

    if (headingMarkdownNode !== null) {
      const node = headingMarkdownNode, ///
            replacementNodeAndTokens = ReplacementNodeAndTokens.fromNode(node, context),
            childNodes = replacementNodeAndTokens.getChildNodes(),
            ruleName = CONTENTS_LINK_RULE_NAME,
            opacity = null,
            tokens = replacementNodeAndTokens.getTokens(),
            identifier = headingMarkdownNode.identifier(context);

      contentsLinkMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, tokens, identifier);
    }

    return contentsLinkMarkdownNode;
  }
}
