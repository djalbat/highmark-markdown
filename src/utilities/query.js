"use strict";

import { Query } from "occam-query";
import { arrayUtilities } from "necessary";

const { first, push } = arrayUtilities;

const linkMarkdownNodesQuery = Query.fromExpression(`//link`),
      contentMarkdownNodeQuery = Query.fromExpression(`//contents`),
      headingMarkdownNodesQuery = Query.fromExpression(`//primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading`),
      footnoteMarkdownNodesQuery = Query.fromExpression(`//footnote`),
      referenceMarkdownNodesQuery = Query.fromExpression(`//reference`);

export function nodeQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    const nodes = query.execute(node),
      nodesLength = nodes.length;

    if (nodesLength > 0) {
      const firstNode = first(nodes);

      node = firstNode; ///
    } else {
      node = null;
    }

    return node;
  }
}

export function nodesQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    const nodes = query.execute(node);

    return nodes;
  }
}

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

export default {
  linkMarkdownNodesFromNode,
  contentsMarkdownNodeFromNode,
  headingMarkdownNodesFromNode,
  footnoteMarkdownNodesFromNode,
  referenceMarkdownNodesFromNode
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
