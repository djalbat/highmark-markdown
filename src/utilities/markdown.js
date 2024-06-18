"use strict";

export function postprocess(divisionMarkdownNode, context) {
  let divisionMarkdownNodes;

  divisionMarkdownNodes = resolveIncludes(divisionMarkdownNode, context);

  resolveEmbeddings(divisionMarkdownNodes, context);

  // divisionMarkdownNodes = paginate(divisionMarkdownNodes, context);

  // createFootnotes(divisionMarkdownNodes, context);

  // createContents(divisionMarkdownNodes, context);

  return divisionMarkdownNodes;
}

function paginate(divisionMarkdownNodes, context) {
  const paginatedDivisionMarkdownNodes = [];

  Object.assign(context, {
    paginatedDivisionMarkdownNodes
  });

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.paginate(context);
  });

  paginatedDivisionMarkdownNodes.forEach((paginatedDivisionMarkdownNode, index) => {
    const pageNumber = index + 1;

    paginatedDivisionMarkdownNode.setPageNumber(pageNumber);
  })

  divisionMarkdownNodes = paginatedDivisionMarkdownNodes; ///

  delete context.paginatedDivisionMarkdownNodes;

  return divisionMarkdownNodes;
}

function createContents(divisionMarkdownNodes, context) {
  divisionMarkdownNodes.some((divisionMarkdownNode) => {
    const contentsCreated = divisionMarkdownNode.createContents(divisionMarkdownNodes, context);

    if (contentsCreated) {
      return true;
    }
  });
}

function createFootnotes(divisionMarkdownNodes, context) {
  const footnoteNumberMap = {};

  Object.assign(context, {
    footnoteNumberMap
  });

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.createFootnotes(context);
  });

  delete context.footnoteNumberMap;
}

function resolveIncludes(divisionMarkdownNode, context) {
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

function resolveEmbeddings(divisionMarkdownNodes, context) {
  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.resolveEmbeddings(context);
  });
}

export default {
  postprocess
};
