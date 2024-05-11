"use strict";

export function replaceNode(replacementNode, replacedNode, parentNode) {
  const replacedChildNode = replacedNode,  ///
        replacementChildNode = replacementNode, ///
        replacementChildNodes = [
          replacementChildNode
        ];

  parentNode.replaceChildNodes(replacedChildNode, replacementChildNodes);
}

export function replaceNodes(replacementNodes, replacedNode, parentNode) {
  const replacedChildNode = replacedNode,  ///
        replacementChildNodes = replacementNodes; ///

  parentNode.replaceChildNodes(replacedChildNode, replacementChildNodes);
}

export function replaceTokens(replacementTokens, replacedNode, tokens) {
  const nonTerminalNode = replacedNode,  ///
        lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
        firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
        lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
        firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
        start = firstSignificantTokenIndex, ///
        end = lastSignificantTokenIndex + 1,
        deleteCount = end - start;

  tokens.splice(start, deleteCount, ...replacementTokens);
}
