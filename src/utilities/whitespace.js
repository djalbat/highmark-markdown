"use strict";

export function assignIndexes(htmlNode, context) {
  const { tokens } = context,
        markdownNode = htmlNode.getMarkdownNode(),
        firstSignificantTokenIndex = markdownNode.getFirstSignificantTokenIndex(tokens),
        lastSignificantTokenIndex = markdownNode.getLastSignificantTokenIndex(tokens),
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