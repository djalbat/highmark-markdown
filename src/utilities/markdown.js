"use strict";

import { Query } from "occam-query";

import { nodeFromNodeAndQuery, nodesFromNodeAndQuery } from "../utilities/query";

const subDivisionMarkdownNodeQuery = Query.fromExpressionString("/division/subDivision"),
      ignoreDirectiveMarkdownNodeQuery = Query.fromExpressionString("/division/subDivision/directives/ignoreDirective"),
      subDivisionMarkdownNodesQuery = Query.fromExpressionString("/division/subDivision"),
      embedDirectiveMarkdownNodesQuery = Query.fromExpressionString("/subDivision/directives/embedDirective"),
      includeDirectiveMarkdownNodesQuery = Query.fromExpressionString("/division/subDivision/directives/includeDirective");

export function subDivisionMarkdownNodeFromNode(node) {
  const subDivisionMarkdownNode = nodeFromNodeAndQuery(node, subDivisionMarkdownNodeQuery);

  return subDivisionMarkdownNode;
}

export function ignoreDirectiveMarkdownNodeFromNode(node) {
  const ignoreDirectiveMarkdownNode = nodeFromNodeAndQuery(node, ignoreDirectiveMarkdownNodeQuery);

  return ignoreDirectiveMarkdownNode;
}

export function subDivisionMarkdownNodesFromNode(node, subDivisionMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, subDivisionMarkdownNodesQuery, subDivisionMarkdownNodes);

  return subDivisionMarkdownNodes;
}

export function embedDirectiveMarkdownNodesFromNode(node, embedDirectiveMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, embedDirectiveMarkdownNodesQuery, embedDirectiveMarkdownNodes);

  return embedDirectiveMarkdownNodes;
}

export function includeDirectiveMarkdownNodesFromNode(node, includeDirectiveMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, includeDirectiveMarkdownNodesQuery, includeDirectiveMarkdownNodes);

  return includeDirectiveMarkdownNodes;
}

export default {
  subDivisionMarkdownNodeFromNode,
  ignoreDirectiveMarkdownNodeFromNode,
  embedDirectiveMarkdownNodesFromNode,
  includeDirectiveMarkdownNodesFromNode
};
