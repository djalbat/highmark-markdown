"use strict";

export function postprocess(divisionMarkdownNode, context) {
  let divisionMarkdownNodes;

  divisionMarkdownNodes = resolveIncludes(divisionMarkdownNode, context);

  resolveEmbeddings(divisionMarkdownNodes, context);

  const footnoteReplacementMap = prepareFootnotes(divisionMarkdownNodes, context),
        markdownNodes = paginate(divisionMarkdownNodes, context);

  divisionMarkdownNodes = divisionMarkdownNodesFromMarkdownNodes(markdownNodes);  ///

  createFootnotes(divisionMarkdownNodes, footnoteReplacementMap, context);

  createContents(divisionMarkdownNodes, context);

  createIndex(divisionMarkdownNodes, context);

  return markdownNodes;
}

function paginate(divisionMarkdownNodes, context) {
  const markdownNOdes = [];

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.paginate(markdownNOdes, context);
  });

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

export function divisionMarkdownNodesFromMarkdownNodes(markdownNodes) {
  const divisionMarkdownNodes = markdownNodes.reduce((divisionMarkdownNodes, markdownNode) => {
    const markdownNodeDivisionMarkdownNode = markdownNode.isDivisionMarkdownNode();

    if (markdownNodeDivisionMarkdownNode) {
      const divisionMarkdownNode = markdownNode;  ///

      divisionMarkdownNodes.push(divisionMarkdownNode);
    }

    return divisionMarkdownNodes;
  }, []);

  return divisionMarkdownNodes;
}

export default {
  postprocess,
  divisionMarkdownNodesFromMarkdownNodes
}