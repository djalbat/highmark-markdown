"use strict";

export function assignIndexes(node, context) {
  const { tokens } = context,
        outerNode = node.getOuterNode(),
        firstSignificantTokenIndex = outerNode.getFirstSignificantTokenIndex(tokens),
        lastSignificantTokenIndex = outerNode.getLastSignificantTokenIndex(tokens),
        whitespaceTokenIndexes = [];

  Object.assign(context, {
    firstSignificantTokenIndex,
    lastSignificantTokenIndex,
    whitespaceTokenIndexes
  });
}

export function deleteIndexes(context) {
  delete context.firstSignificantTokenIndex;
  delete context.lastSignificantTokenIndex;
  delete context.whitespaceTokenIndexes;
}