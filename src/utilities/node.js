"use strict";

import { arrayUtilities } from "necessary";

const { forwardsSome, backwardsSome } = arrayUtilities;

export function leadingIndexFromNodeAndTokens(node, tokens) {
  let leadingIndex;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    leadingIndex = leadingIndexFromTerminalNodeAndTokens(terminalNode, tokens);
  } else {
    const nonTerminalNode = node;  ///

    leadingIndex = leadingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens);
  }

  return leadingIndex;
}

export function trailingIndexFromNodeAndTokens(node, tokens) {
  let trailingIndex;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    trailingIndex = trailingIndexFromTerminalNodeAndTokens(terminalNode, tokens);
  } else {
    const nonTerminalNode = node;  ///

    trailingIndex = trailingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens);
  }

  return trailingIndex;
}

function leadingIndexFromTerminalNodeAndTokens(terminalNode, tokens) {
  let leadingIndex;

  const significantToken = terminalNode.getSignificantToken();

  if (significantToken === null) {
    leadingIndex = -1;
  } else {
    const significantTokenIndex = tokens.indexOf(significantToken);

    leadingIndex = significantTokenIndex; ///
  }

  return leadingIndex;
}

function trailingIndexFromTerminalNodeAndTokens(terminalNode, tokens) {
  let trailingIndex;

  const significantToken = terminalNode.getSignificantToken();

  if (significantToken === null) {
    trailingIndex = -1;
  } else {
    const significantTokenIndex = tokens.indexOf(significantToken);

    trailingIndex = significantTokenIndex; ///
  }

  return trailingIndex;
}

function leadingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
  let leadingIndex;

  const childNodes = nonTerminalNode.getChildNodes();

  forwardsSome(childNodes, (childNode) => {
    const node = childNode;

    leadingIndex = leadingIndexFromNodeAndTokens(node, tokens);

    if (leadingIndex !== -1) {
      return true;
    }
  });

  return leadingIndex;
}

function trailingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
  let trailingIndex;

  const childNodes = nonTerminalNode.getChildNodes();

  backwardsSome(childNodes, (childNode) => {
    const node = childNode;

    trailingIndex = trailingIndexFromNodeAndTokens(node, tokens);

    if (trailingIndex !== -1) {
      return true;
    }
  });

  return trailingIndex;
}

