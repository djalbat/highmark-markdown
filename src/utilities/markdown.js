"use strict";

export function postprocess(divisionMarkdownNode, context) {
  let divisionMarkdownNodes = [
    divisionMarkdownNode
  ];

  Object.assign(context, {
    divisionMarkdownNodes
  });

  divisionMarkdownNode.resolveIncludes(context);

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.resolveEmbeddings(context);
  });

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.paginate(context);
  });

  ({ divisionMarkdownNodes } = context);

  delete context.divisionMarkdownNodes;

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
