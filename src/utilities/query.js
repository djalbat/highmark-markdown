"use strict";

import { Query } from "occam-query";
import { arrayUtilities } from "necessary";

const { push } = arrayUtilities;

const linkMarkdownNodesQuery = Query.fromExpression(`//link`),
      footnoteMarkdownNodesQuery = Query.fromExpression(`//footnote`),
      referenceMarkdownNodesQuery = Query.fromExpression(`//reference`);

export function linkMarkdownNodesFromNode(node, linkMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, linkMarkdownNodesQuery, linkMarkdownNodes);

  return linkMarkdownNodes;
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
  footnoteMarkdownNodesFromNode,
  referenceMarkdownNodesFromNode
};

function nodesFromNodeAndQuery(node, query, nodes) {
  const queryNodes = query.execute(node);

  push(nodes, queryNodes);

  return nodes;
}
