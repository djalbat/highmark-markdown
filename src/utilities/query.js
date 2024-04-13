"use strict";

import { Query } from "occam-query";
import { arrayUtilities } from "necessary";

const { first, push } = arrayUtilities;

const linkMarkdownNodesQuery = Query.fromExpression(`//link`),
      contentMarkdownNodeQuery = Query.fromExpression(`//contents`),
      headingMarkdownNodesQuery = Query.fromExpression(`//primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading`),
      footnoteMarkdownNodesQuery = Query.fromExpression(`//footnote`),
      referenceMarkdownNodesQuery = Query.fromExpression(`//reference`),
      primaryHeadingMarkdownNodesQuery = Query.fromExpression(`//primaryHeading`);

export function linkMarkdownNodesFromNode(node, linkMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, linkMarkdownNodesQuery, linkMarkdownNodes);

  return linkMarkdownNodes;
}

export function contentsMarkdownNodeFromNode(node) {
  const contentsMarkdownNode = nodeFromNodeAndQuery(node, contentMarkdownNodeQuery);

  return contentsMarkdownNode;
}

export function headingMarkdownNodesFromNode(node, headingMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, headingMarkdownNodesQuery, headingMarkdownNodes);

  return headingMarkdownNodes;
}

export function footnoteMarkdownNodesFromNode(node, footnoteMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, footnoteMarkdownNodesQuery, footnoteMarkdownNodes);

  return footnoteMarkdownNodes;
}

export function referenceMarkdownNodesFromNode(node, referenceMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, referenceMarkdownNodesQuery, referenceMarkdownNodes);

  return referenceMarkdownNodes;
}

export function primaryHeadingMarkdownNodesFromNode(node, primaryHeadingMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, primaryHeadingMarkdownNodesQuery, primaryHeadingMarkdownNodes);

  return primaryHeadingMarkdownNodes;
}

export default {
  linkMarkdownNodesFromNode,
  contentsMarkdownNodeFromNode,
  headingMarkdownNodesFromNode,
  footnoteMarkdownNodesFromNode,
  referenceMarkdownNodesFromNode,
  primaryHeadingMarkdownNodesFromNode
};

function nodeFromNodeAndQuery(node, query) {
  const queryNodes = query.execute(node),
        queryNodesLength = queryNodes.length;

  if (queryNodesLength === 0) {
    node = null;
  } else {
    const firstQueryNode = first(queryNodes);

    node = firstQueryNode;  ///
  }

  return node;
}

function nodesFromNodeAndQuery(node, query, nodes) {
  const queryNodes = query.execute(node);

  push(nodes, queryNodes);

  return nodes;
}
