"use strict";

import { arrayUtilities } from "necessary";

const { forwardsSome, backwardsSome } = arrayUtilities;

export function removeNode(removedNode, parentNode) {
  const removedChildNode = removedNode; ///

  parentNode.removeChildNode(removedChildNode);
}

export function removeNodes(removedNodes, parentNode) {
  const removedChildNodes = removedNodes; ///

  parentNode.removeChildNodes(removedChildNodes);
}

export function removeTokens(removedNode, tokens) {
  const nonTerminalNode = removedNode,  ///
        leadingIndex = leadingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
        trailingIndex = trailingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
        start = leadingIndex, ///
        end = trailingIndex + 1,
        deleteCount = end - start;

  tokens.splice(start, deleteCount);
}

export function replaceNode(replacementNode, replacedNode, parentNode) {
  const replacedChildNode = replacedNode,  ///
        replacementChildNode = replacementNode; ///

  parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
}

export function replaceNodes(replacementNodes, replacedNode, parentNode) {
  const replacedChildNode = replacedNode,  ///
        replacementChildNodes = replacementNodes; ///

  parentNode.replaceChildNodes(replacedChildNode, replacementChildNodes);
}

export function replaceTokens(replacementTokens, replacedNode, tokens) {
  const nonTerminalNode = replacedNode,  ///
        leadingIndex = leadingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
        trailingIndex = trailingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
        start = leadingIndex, ///
        end = trailingIndex + 1,
        deleteCount = end - start;

  tokens.splice(start, deleteCount, ...replacementTokens);
}

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

