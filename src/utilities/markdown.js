"use strict";

export function postprocess(divisionMarkdownNode, context) {
  let divisionMarkdownNodes;

  divisionMarkdownNodes = resolveIncludes(divisionMarkdownNode, context);

  resolveEmbeddings(divisionMarkdownNodes, context);

  // divisionMarkdownNodes = paginate(divisionMarkdownNodes, context);

  createFootnotes(divisionMarkdownNodes, context);

  createContents(divisionMarkdownNodes, context);

  return divisionMarkdownNodes;
}

function paginate(divisionMarkdownNodes, context) {
  const { linesPerPage = null } = context;

  if (linesPerPage !== null) {
    const pageDivisionMarkdownNodes = [];

    divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
      divisionMarkdownNode.paginate(pageDivisionMarkdownNodes, context);
    });

    divisionMarkdownNodes = pageDivisionMarkdownNodes;  ///
  }

  return divisionMarkdownNodes;
}

function createContents(divisionMarkdownNodes, context) {
  divisionMarkdownNodes.some((divisionMarkdownNode) => {
    const contentsCreated = divisionMarkdownNode.createContents(context);

    if (contentsCreated) {
      return true;
    }
  });
}

function createFootnotes(divisionMarkdownNodes, context) {
  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.createFootnotes(context);
  });
}

function resolveIncludes(divisionMarkdownNode, context) {
  const divisionMarkdownNodes = [
    divisionMarkdownNode
  ];

  Object.assign(context, {
    divisionMarkdownNodes
  });

  divisionMarkdownNode.resolveIncludes(context);

  delete context.divisionMarkdownNodes;

  return divisionMarkdownNodes;
}

function resolveEmbeddings(divisionMarkdownNodes, context) {
  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.resolveEmbeddings(context);
  });
}
