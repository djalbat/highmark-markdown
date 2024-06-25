"use strict";

export function postprocess(divisionMarkdownNode, indexEntries, context) {
  let divisionMarkdownNodes;

  divisionMarkdownNodes = resolveIncludes(divisionMarkdownNode, context);

  resolveEmbeddings(divisionMarkdownNodes, context);

  const footnoteReplacementMap = prepareFootnotes(divisionMarkdownNodes, context);

  divisionMarkdownNodes = paginate(divisionMarkdownNodes, context);

  createFootnotes(divisionMarkdownNodes, footnoteReplacementMap, context);

  createContents(divisionMarkdownNodes, context);

  createIndex(divisionMarkdownNodes, indexEntries, context);

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

function createIndex(divisionMarkdownNodes, indexEntries, context) {
  divisionMarkdownNodes.some((divisionMarkdownNode) => {
    const indexCreated = divisionMarkdownNode.createIndex(divisionMarkdownNodes, indexEntries, context);

    if (indexCreated) {
      return true;
    }
  });
}

function createContents(divisionMarkdownNodes, context) {
  divisionMarkdownNodes.some((divisionMarkdownNode) => {
    const contentsCreated = divisionMarkdownNode.createContents(divisionMarkdownNodes, context);

    if (contentsCreated) {
      return true;
    }
  });
}

function createFootnotes(divisionMarkdownNodes, footnoteReplacementMap, context) {
  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.createFootnotes(footnoteReplacementMap, context);
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
  const footnoteReplacementMap = {};

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.prepareFootnotes(footnoteReplacementMap, context);
  });

  return footnoteReplacementMap;
}

function resolveEmbeddings(divisionMarkdownNodes, context) {
  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.resolveEmbeddings(context);
  });
}

export default {
  postprocess
};
