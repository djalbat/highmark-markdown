"use strict";

export function postprocess(divisionMarkdownNode, context) {
  let divisionMarkdownNodes = [
    divisionMarkdownNode
  ];

  Object.assign(context, {
    divisionMarkdownNodes
  });

  divisionMarkdownNode.resolveIncludes(context);

  delete context.divisionMarkdownNodes;

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.resolveEmbeddings(context);
  });

  const { linesPerPage = null } = context;

  if (linesPerPage !== null) {
    const pageDivisionMarkdownNodes = [];

    divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
      divisionMarkdownNode.paginate(pageDivisionMarkdownNodes, context);
    });

    divisionMarkdownNodes = pageDivisionMarkdownNodes;  ///
  }

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
