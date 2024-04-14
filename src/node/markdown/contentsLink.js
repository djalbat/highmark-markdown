"use strict";

import { arrayUtilities } from "necessary";

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

  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    let contentsLinkMarkdownNode = null;

    const node = nestedHeadingMarkdownNode.getNode(),
          headingMarkdownNode = node;  ///

    if (headingMarkdownNode !== null) {
      const { replacementTokens } = context,
            headingMarkdownNodeOffset = offsetFromNode(headingMarkdownNode, context), ///
            headingMarkdownNodeTokens = tokensFromNode(headingMarkdownNode, context),
            headingMarkdownNodeChildNodes = childNodesFromNode(headingMarkdownNode);

      push(replacementTokens, headingMarkdownNodeTokens);

      replaceChildNodesTokens(headingMarkdownNodeChildNodes, headingMarkdownNodeTokens, headingMarkdownNodeOffset, context);

      const childNodes = headingMarkdownNodeChildNodes, ///
            ruleName = CONTENTS_LINK_RULE_NAME,
            opacity = null,
            identifier = headingMarkdownNode.identifier(context);

      contentsLinkMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, identifier);
    }

    return contentsLinkMarkdownNode;
  }
}

function offsetFromNode(node, context) {
  const { tokens } = context,
        nonTerminalNode = node,  ///
        firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
        firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
        offset = firstSignificantTokenIndex;  ///

  return offset;
}

function tokensFromNode(node, context) {
  let tokens;

  ({ tokens } = context);

  const nonTerminalNode = node,  ///
        lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
        firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
        lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
        firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
        start = firstSignificantTokenIndex, ///
        end = lastSignificantTokenIndex + 1;

  tokens = tokens.slice(start, end);

  tokens = tokens.map((token) => {  ///
    token = token.clone();  ///

    return token;
  });

  return tokens;
}

function childNodesFromNode(node) {
  let childNodes;

  const nonTerminalNode = node;  ///

  childNodes = nonTerminalNode.getChildNodes();

  childNodes = childNodes.map((childNode) => { ///
    childNode = childNode.clone();  ///

    return childNode;
  });

  return childNodes;
}

function replaceNodeTokens(node, replacementTokens, offset, context) {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    replaceTerminalNodeTokens(terminalNode, replacementTokens, offset, context);
  } else {
    const nonTerminalNode = node;  ///

    replaceNonTerminalNodeTokens(nonTerminalNode, replacementTokens, offset, context);
  }
}

function replaceChildNodesTokens(childNodes, tokens, offset, context) {
  childNodes.forEach((childNode) => {
    const node = childNode; ///

    replaceNodeTokens(node, tokens, offset, context);
  });
}

function replaceTerminalNodeTokens(terminalNode, tokens, offset, context) {
  let index,
      significantToken;

  const temporaryTokens = tokens; ///

  ({ tokens } = context);

  significantToken = terminalNode.getSignificantToken();

  index = tokens.indexOf(significantToken);

  index -= offset;

  tokens = temporaryTokens; ///

  const token = tokens[index];

  significantToken = token;  ///

  terminalNode.setSignificantToken(significantToken);
}

function replaceNonTerminalNodeTokens(nonTerminalNode, tokens, offset, context) {
  const childNodes = nonTerminalNode.getChildNodes();

  replaceChildNodesTokens(childNodes, tokens, offset, context);
}
