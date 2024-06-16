"use strict";

import { arrayUtilities } from "necessary";

import { leadingIndexFromNodeAndTokens, trailingIndexFromNodeAndTokens } from "./utilities/node";
import { removeNode, appendNode, removeTokens, appendTokens, replaceNode, replaceNodes, replaceTokens } from "./utilities/replacement";

const { push } = arrayUtilities;

export default class Replacement {
  constructor(node, tokens) {
    this.node = node;
    this.tokens = tokens;
  }

  getNode() {
    return this.node;
  }

  getTokens(tokens = []) {
    push(tokens, this.tokens);

    return this.tokens;
  }

  getChildNodes() { return this.node.getChildNodes(); }

  contract(Class, descendentNode) {
    if (descendentNode === undefined) {
      descendentNode = Class; ///

      Class = Replacement;  ///
    }

    const node = descendentNode,  ///
          tokens = this.tokens, ///
          context = { ///
            tokens
          },
          replacement = Class.fromNode(node, context);  ///

    return replacement;
  }

  expand(Class, ascendantNode) {
    if (ascendantNode === undefined) {
      ascendantNode = Class;

      Class = Replacement;  ///
    }

    const node = ascendantNode, ///
          tokens = this.tokens, ///
          context = {
            tokens
          },
          replacement = Class.fromNode(node, context);  ///

    return replacement;
  }

  appendTo(parentNode, context) {
    const { tokens } = context,
          replacementNode = this.node,  ///
          replacementTokens = this.tokens;  ///

    appendNode(replacementNode, parentNode);

    appendTokens(replacementTokens, parentNode, tokens);
  }

  replace(replacedNode, parentNode, context) {
    const { tokens } = context,
          replacementNode = this.node, ///
          replacementTokens = this.tokens; ///

    replaceNode(replacementNode, replacedNode, parentNode);

    replaceTokens(replacementTokens, replacedNode, tokens);
  }

  replaceEx(replacedNode, parentNode, context) {
    const { tokens } = context,
          replacementChildNodes = this.getChildNodes(), ///
          replacementTokens = this.tokens,  ///
          replacementNodes = replacementChildNodes; ///

    replaceNodes(replacementNodes, replacedNode, parentNode);

    replaceTokens(replacementTokens, replacedNode, tokens);
  }

  removeFrom(removedNode, parentNode, context) {
    const { tokens } = context;

    removeTokens(removedNode, tokens);

    removeNode(removedNode, parentNode);
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

  childNodes.forEach((childNode) => {
    const node = childNode; ///

    overwriteNodeTokens(node, clonedTokens, tokens, offset);
  });
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
