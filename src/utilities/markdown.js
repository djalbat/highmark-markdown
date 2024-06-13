"use strict";

export function preprocess(divisionMarkdownNode, context) {
  const pageNumber = 1,
        divisionMarkdownNodes = [
          divisionMarkdownNode
        ];

  Object.assign(context, {
    pageNumber,
    divisionMarkdownNodes
  });

  divisionMarkdownNode.resolveIncludes(context);

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.resolveEmbeddings(context);
  });

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.createFootnotes(context);
  });

  divisionMarkdownNodes.some((divisionMarkdownNode) => {
    const contentsCreated = divisionMarkdownNode.createContents(context);

    if (contentsCreated) {
      return true;
    }
  });

  return divisionMarkdownNodes;
}
