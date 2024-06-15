"use strict";

import { removeNode, appendNode, removeTokens, appendTokens, replaceNodes, replaceTokens, leadingIndexFromNodeAndTokens, trailingIndexFromNodeAndTokens } from "./utilities/node";

export default class Replacement {
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

  contract(descendentNode) {
    const node = descendentNode,  ///
          tokens = this.tokens, ///
          context = { ///
            tokens
          },
          replacement = Replacement.fromNode(node, context);  ///

    return replacement;
  }

  expand(ascendantNode) {
    const node = ascendantNode, ///
          tokens = this.tokens, ///
          context = {
            tokens
          },
          replacement = Replacement.fromNode(node, context);  ///

    return replacement;
  }

  clone(...remainingArguments) {
    const node = this.node.clone(),
          clonedTokens = clonedTokensFromNodeAndTokens(node, this.tokens);

    overwriteNodeTokens(node, clonedTokens, this.tokens);

    const Class = this.constructor,
          tokens = clonedTokens, ///
          replacement = new Class(node, tokens, ...remainingArguments);

    return replacement
  }

  replace(replacedNode, parentNode, context) {
    const { tokens } = context,
          replacementChildNodes = this.getChildNodes(), ///
          replacementTokens = this.tokens,  ///
          replacementNodes = replacementChildNodes; ///

    replaceNodes(replacementNodes, replacedNode, parentNode);

    replaceTokens(replacementTokens, replacedNode, tokens);
  }

  appendTo(parentNode, context) {
    const { tokens } = context,
          replacementNode = this.node,  ///
          replacementTokens = this.tokens;  ///

    appendNode(replacementNode, parentNode);

    appendTokens(replacementTokens, parentNode, tokens);
  }

  removeFrom(removedNode, parentNode, context) {
    const { tokens } = context;

    removeTokens(removedNode, tokens);

    removeNode(removedNode, parentNode);
  }

  static fromNode(Class, node, context, ...remainingArguments) {
    if (context === undefined) {
      context = node; ///

      node = Class; ///

      Class = Replacement;  ///
    }

    let { tokens } = context;

    const clonedTokens = clonedTokensFromNodeAndTokens(node, tokens),
          leadingIndex = leadingIndexFromNodeAndTokens(node, tokens),
          offset = leadingIndex;  ///

    node = node.clone();  ///

    overwriteNodeTokens(node, clonedTokens, tokens, offset);

    tokens = clonedTokens; ///

    const replacement = new Class(node, tokens, ...remainingArguments);

    return replacement;
  }

  static fromNodeAndTokens(Class, node, tokens, ...remainingArguments) {
    if (tokens === undefined) {
      tokens = node;  ///

      node = Class; ///

      Class = Replacement;  ///
    }

    const replacement = new Class(node, tokens, ...remainingArguments);

    return replacement;
  }
}

function overwriteNodeTokens(node, clonedTokens, tokens, offset = 0) {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    overwriteTerminalNodeTokens(terminalNode, clonedTokens, tokens, offset);
  } else {
    const nonTerminalNode = node;  ///

    overwriteNonTerminalNodeTokens(nonTerminalNode, clonedTokens, tokens, offset);
  }
}

function overwriteChildNodesTokens(childNodes, clonedTokens, tokens, offset) {
  childNodes.forEach((childNode) => {
    const node = childNode; ///

    overwriteNodeTokens(node, clonedTokens, tokens, offset);
  });
}

function overwriteTerminalNodeTokens(terminalNode, clonedTokens, tokens, offset) {
  let index,
      significantToken;

  significantToken = terminalNode.getSignificantToken();

  if (significantToken !== null) {
    index = tokens.indexOf(significantToken);

    index -= offset;

    const clonedToken = clonedTokens[index];

    significantToken = clonedToken;  ///

    terminalNode.setSignificantToken(significantToken);
  }
}

function overwriteNonTerminalNodeTokens(nonTerminalNode, clonedTokens, tokens, offset) {
  const childNodes = nonTerminalNode.getChildNodes();

  overwriteChildNodesTokens(childNodes, clonedTokens, tokens, offset);
}

function clonedTokensFromNodeAndTokens(node, tokens) {
  const leadingIndex = leadingIndexFromNodeAndTokens(node, tokens),
        trailingIndex = trailingIndexFromNodeAndTokens(node, tokens),
        start = leadingIndex,  ///
        end = trailingIndex + 1;

  tokens = tokens.slice(start, end);  ///

  const clonedTokens = tokens.map((token) => {  ///
    const clonedToken = token.clone();

    return clonedToken;
  });

  return clonedTokens;
}
