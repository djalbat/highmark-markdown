"use strict";

export function resolveIncludes(divisionMarkdownNode, context) {
  const divisionMarkdownNodes = [];

  Object.assign(context, {
    divisionMarkdownNodes
  });

  const divisionMarkdownNodeIgnored = divisionMarkdownNode.isIgnored();

  if (!divisionMarkdownNodeIgnored) {
    divisionMarkdownNodes.push(divisionMarkdownNode);
  }

  divisionMarkdownNode.resolveIncludes(context);

  delete context.divisionMarkdownNodes;

  return divisionMarkdownNodes;
}

export function resolveEmbeddings(divisionMarkdownNodes, context) {
  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.resolveEmbeddings(context);
  });
}

export default {
  resolveIncludes,
  resolveEmbeddings
};
