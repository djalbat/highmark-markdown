"use strict";

export function postProcess(divisionMarkdownNodes, context) {
  // const footnoteReplacementMap = prepareFootnotes(divisionMarkdownNodes, context),
  //       markdownNodes = paginate(divisionMarkdownNodes, context);
  //
  // divisionMarkdownNodes = divisionMarkdownNodesFromMarkdownNodes(markdownNodes);  ///
  //
  // createFootnotes(divisionMarkdownNodes, footnoteReplacementMap, context);
  //
  // createContents(divisionMarkdownNodes, context);
  //
  // createIndex(divisionMarkdownNodes, context);
}

function paginate(divisionMarkdownNodes, context) {
  const pageNumber = 1,
        markdownNOdes = [];

  Object.assign(context, {
    pageNumber
  });

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.paginate(markdownNOdes, context);
  });

  delete context.pageNumber;

  return markdownNOdes;
}

function createIndex(divisionMarkdownNodes, context) {
  divisionMarkdownNodes.some((divisionMarkdownNode) => {
    const indexCreated = divisionMarkdownNode.createIndex(divisionMarkdownNodes, context);

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

function prepareFootnotes(divisionMarkdownNodes, context) {
  const footnoteReplacementMap = {};

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.prepareFootnotes(footnoteReplacementMap, context);
  });

  return footnoteReplacementMap;
}

export default {
  postProcess
}