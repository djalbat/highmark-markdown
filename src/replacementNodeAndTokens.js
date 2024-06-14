"use strict";

import { leadingIndexFromNodeAndTokens, trailingIndexFromNodeAndTokens } from "./utilities/replace";

export default class ReplacementNodeAndTokens {
  constructor(node, tokens) {
    this.node = node;
    this.tokens = tokens;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getChildNodes() { return this.node.getChildNodes(); }

  clone() {
    const node = this.node.clone(),
          replacementTokens = replacementTokensFromNodeAndTokens(node, this.tokens);

    replaceNodeTokens(node, replacementTokens, this.tokens);

    const tokens = replacementTokens, ///
          replacementNodeAndTokens = new ReplacementNodeAndTokens(node, tokens);

    return replacementNodeAndTokens
  }

  appendTo(markdownNode, context) {
    const { tokens } = context,
          node = markdownNode, ///
          trailingIndex = trailingIndexFromNodeAndTokens(node, tokens),
          replacementNodeAndTokens = this.clone(),  ///
          replacementNodeAndTokensNode = replacementNodeAndTokens.getNode(),
          replacementNodeAndTokensTokens = replacementNodeAndTokens.getTokens(),
          childNode = replacementNodeAndTokensNode, ///
          start = trailingIndex + 1,
          deleteCount = 0,
          replacementTokens = replacementNodeAndTokensTokens; ///

    markdownNode.appendChildNode(childNode);

    tokens.splice(start, deleteCount, ...replacementTokens);
  }

  static fromNode(node, context) {
    let { tokens } = context;

    const replacementTokens = replacementTokensFromNodeAndTokens(node, tokens),
          leadingIndex = leadingIndexFromNodeAndTokens(node, tokens),
          offset = leadingIndex;  ///

    node = node.clone();  ///

    replaceNodeTokens(node, replacementTokens, tokens, offset);

    tokens = replacementTokens; ///

    const replacementNodeAndTokens = new ReplacementNodeAndTokens(node, tokens);

    return replacementNodeAndTokens;
  }

  static fromNodeAndTokens(node, tokens) {
    const replacementNodeAndTokens = new ReplacementNodeAndTokens(node, tokens);

    return replacementNodeAndTokens;
  }
}

function replaceNodeTokens(node, replacementTokens, tokens, offset = 0) {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    replaceTerminalNodeTokens(terminalNode, replacementTokens, tokens, offset);
  } else {
    const nonTerminalNode = node;  ///

    replaceNonTerminalNodeTokens(nonTerminalNode, replacementTokens, tokens, offset);
  }
}

function replaceChildNodesTokens(childNodes, replacementTokens, tokens, offset) {
  childNodes.forEach((childNode) => {
    const node = childNode; ///

    replaceNodeTokens(node, replacementTokens, tokens, offset);
  });
}

function replaceTerminalNodeTokens(terminalNode, replacementTokens, tokens, offset) {
  let index,
      significantToken;

  significantToken = terminalNode.getSignificantToken();

  if (significantToken !== null) {
    index = tokens.indexOf(significantToken);

    index -= offset;

    const replacementToken = replacementTokens[index];

    significantToken = replacementToken;  ///

    terminalNode.setSignificantToken(significantToken);
  }
}

function replaceNonTerminalNodeTokens(nonTerminalNode, replacementTokens, tokens, offset) {
  const childNodes = nonTerminalNode.getChildNodes();

  replaceChildNodesTokens(childNodes, replacementTokens, tokens, offset);
}

function replacementTokensFromNodeAndTokens(node, tokens) {
  const leadingIndex = leadingIndexFromNodeAndTokens(node, tokens),
        trailingIndex = trailingIndexFromNodeAndTokens(node, tokens),
        start = leadingIndex,  ///
        end = trailingIndex + 1;

  tokens = tokens.slice(start, end);  ///

  const replacementTokens = tokens.map((token) => {  ///
    const replacementToken = token.clone();  ///;

    return replacementToken;
  });

  return replacementTokens;
}
