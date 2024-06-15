"use strict";

import { arrayUtilities } from "necessary";

const { clear, first, push } = arrayUtilities;

export function postprocess(divisionMarkdownNode, context) {
  const divisionMarkdownNodes = [
    divisionMarkdownNode
  ];

  resolveIncludes(divisionMarkdownNodes, context);

  resolveEmbeddings(divisionMarkdownNodes, context);

  paginateAndFootnotes(divisionMarkdownNodes, context);

  createContents(divisionMarkdownNodes, context);

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

function resolveIncludes(divisionMarkdownNodes, context) {
  const firstDivisionMarkdownNode = first(divisionMarkdownNodes),
        divisionMarkdownNode = firstDivisionMarkdownNode; ///

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

function paginateAndFootnotes(divisionMarkdownNodes, context) {
  const { linesPerPage = null } = context;

  const identifierToFootnoteNumberMap = {};

  Object.assign(context, {
    identifierToFootnoteNumberMap
  });

  if (linesPerPage === null) {
    divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
      const footnoteReplacements = divisionMarkdownNode.prepareFootnotes(context);

      divisionMarkdownNode.createFootnotes(footnoteReplacements, context);
    });
  } else {
    const paginatedDivisionMarkdownNodes = [];

    divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
      const footnoteReplacements = divisionMarkdownNode.prepareFootnotes(context),
            divisionMarkdownNodes = divisionMarkdownNode.paginate(context);

      divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
        divisionMarkdownNode.createFootnotes(footnoteReplacements, context);
      });

      push(paginatedDivisionMarkdownNodes, divisionMarkdownNodes);
    });

    clear(divisionMarkdownNodes);

    push(divisionMarkdownNodes, paginatedDivisionMarkdownNodes);
  }

  delete context.identifierToFootnoteNumberMap;
}
