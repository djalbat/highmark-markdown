"use strict";

import { leadingIndexFromNodeAndTokens, trailingIndexFromNodeAndTokens } from "../utilities/node";

export function appendNode(replacementNode, parentNode) {
  const childNode = replacementNode;  ///

  parentNode.appendChildNode(childNode);
}

export function appendTokens(replacementTokens, parentNode, tokens) {
  const node = parentNode, ///
        trailingIndex = trailingIndexFromNodeAndTokens(node, tokens),
        start = trailingIndex + 1,
        deleteCount = 0;

  tokens.splice(start, deleteCount, ...replacementTokens);
}

export function removeNode(removedNode, parentNode) {
  const removedChildNode = removedNode; ///

  parentNode.removeChildNode(removedChildNode);
}

export function removeNodes(removedNodes, parentNode) {
  const removedChildNodes = removedNodes; ///

  parentNode.removeChildNodes(removedChildNodes);
}

export function removeTokens(removedNode, tokens) {
  const node = removedNode,  ///
        leadingIndex = leadingIndexFromNodeAndTokens(node, tokens),
        trailingIndex = trailingIndexFromNodeAndTokens(node, tokens),
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
  const node = replacedNode,  ///
        leadingIndex = leadingIndexFromNodeAndTokens(node, tokens),
        trailingIndex = trailingIndexFromNodeAndTokens(node, tokens),
        start = leadingIndex, ///
        end = trailingIndex + 1,
        deleteCount = end - start;

  tokens.splice(start, deleteCount, ...replacementTokens);
}
