"use strict";

export function postprocess(divisionMarkdownNode, context) {
  let divisionMarkdownNodes;

  divisionMarkdownNodes = resolveIncludes(divisionMarkdownNode, context);

  resolveEmbeddings(divisionMarkdownNodes, context);

  const footnoteMap = prepareFootnotes(divisionMarkdownNodes, context);

  divisionMarkdownNodes = paginate(divisionMarkdownNodes, context);

  createFootnotes(divisionMarkdownNodes, footnoteMap, context);

  // createContents(divisionMarkdownNodes, context);

  return divisionMarkdownNodes;
}

function paginate(divisionMarkdownNodes, context) {
  const paginatedDivisionMarkdownNodes = [];

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.paginate(paginatedDivisionMarkdownNodes, context);
  });

  paginatedDivisionMarkdownNodes.forEach((paginatedDivisionMarkdownNode, index) => {
    const pageNumber = index + 1;

    paginatedDivisionMarkdownNode.setPageNumber(pageNumber);
  });

  divisionMarkdownNodes = paginatedDivisionMarkdownNodes; ///

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

function createFootnotes(divisionMarkdownNodes, footnoteMap, context) {
  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.createFootnotes(footnoteMap, context);
  });
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

function prepareFootnotes(divisionMarkdownNodes, context) {
  const footnoteMap = {};

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.prepareFootnotes(footnoteMap, context);
  });

  return footnoteMap;
}

function resolveEmbeddings(divisionMarkdownNodes, context) {
  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.resolveEmbeddings(context);
  });
}

export default {
  postprocess
};
