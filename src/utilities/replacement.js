"use strict";

import { leadingIndexFromNodeAndTokens, trailingIndexFromNodeAndTokens } from "../utilities/node";

export function appendNode(appendedNode, parentNode) {
  const appendedChildNode = appendedNode;  ///

  parentNode.appendChildNode(appendedChildNode);
}

export function removeNode(removedNode, parentNode) {
  const removedChildNode = removedNode; ///

  parentNode.removeChildNode(removedChildNode);
}

export function removeNodes(removedNodes, parentNode) {
  const removedChildNodes = removedNodes; ///

  parentNode.removeChildNodes(removedChildNodes);
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

export function addNodesAfter(existingNode, addedNodes, parentNode) {
  const existingChildNode = existingNode, ///
        addedChildNodes = addedNodes; ///

  parentNode.addChildNodesAfter(existingChildNode, addedChildNodes);
}

export function appendTokens(appendedTokens, parentNode, tokens) {
  const node = parentNode, ///
        trailingIndex = trailingIndexFromNodeAndTokens(node, tokens),
        start = trailingIndex + 1,
        deleteCount = 0;

  tokens.splice(start, deleteCount, ...appendedTokens);
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

export function replaceTokens(replacementTokens, replacedNode, tokens) {
  const node = replacedNode,  ///
        leadingIndex = leadingIndexFromNodeAndTokens(node, tokens),
        trailingIndex = trailingIndexFromNodeAndTokens(node, tokens),
        start = leadingIndex, ///
        end = trailingIndex + 1,
        deleteCount = end - start;

  tokens.splice(start, deleteCount, ...replacementTokens);
}

export function addNodeAfter(existingNode, addedNode, parentNode) {
  const existingChildNode = existingNode, ///
        addedChildNode = addedNode; ///

  parentNode.appendChildNodeAfter(existingChildNode, addedChildNode);
}

export function addTokensAfter(existingNode, addedTokens, tokens) {
  const node = existingNode,  ///
        trailingIndex = trailingIndexFromNodeAndTokens(node, tokens),
        start = trailingIndex + 1,
        deleteCount = 0;

  tokens.splice(start, deleteCount, ...addedTokens);
}
