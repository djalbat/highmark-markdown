"use strict";

export function replaceTokens(replacedChildNode, replacementTokens, context) {
  const { tokens } = context,
        nonTerminalNode = replacedChildNode,  ///
        lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
        firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
        lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
        firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
        start = firstSignificantTokenIndex, ///
        deleteCount = lastSignificantTokenIndex - firstSignificantTokenIndex; ///

  tokens.splice(start, deleteCount, ...replacementTokens);
}
