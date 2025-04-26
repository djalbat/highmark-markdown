"use strict";

import { Query } from "occam-query";
import { arrayUtilities } from "necessary";

const { push } = arrayUtilities;

const footnoteMarkdownNodeQuery = Query.fromExpressionString("/division/footnote"),
      divisionMarkdownNodeQuery = Query.fromExpressionString("/markdown/division"),
      subDivisionMarkdownNodeQuery = Query.fromExpressionString("/division/subDivision"),
      indexDirectiveMarkdownNodeQuery = Query.fromExpressionString("/division/subDivision/directives/indexDirective"),
      ignoreDirectiveMarkdownNodeQuery = Query.fromExpressionString("/division/subDivision/directives/ignoreDirective"),
      contentsDirectiveMarkdownNodeQuery = Query.fromExpressionString("/division/subDivision/directives/contentsDirective"),
      footnotesDirectiveMarkdownNodeQuery = Query.fromExpressionString("/division/subDivision/directives/footnotesDirective"),
      pageNumberDirectiveMarkdownNodeQuery = Query.fromExpressionString("//directives/pageNumber"),  ///
      headingMarkdownNodesQuery = Query.fromExpressionString("/division/primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading"),  ///
      divisionMarkdownNodesQuery = Query.fromExpressionString("/markdown/division"),
      footnotesMarkdownNodesQuery = Query.fromExpressionString("//footnote|footnoteLink|footnotesDirective"), ///
      subDivisionMarkdownNodesQuery = Query.fromExpressionString("/division/subDivision"),
      footnoteLinkMarkdownNodesQuery = Query.fromExpressionString("//footnoteLink"),
      embedDirectiveMarkdownNodesQuery = Query.fromExpressionString("/subDivision/directives/embedDirective"),
      includeDirectiveMarkdownNodesQuery = Query.fromExpressionString("/division/subDivision/directives/includeDirective");

export function nodeQuery(expression) {
  const query = Query.fromExpressionString(expression);

  return function(node) {
    const nodes = query.execute(node);

    node = nodes.shift() || null; ///

    return node;
  }
}

export function nodesQuery(expression) {
  const query = Query.fromExpressionString(expression);

  return function(node) {
    const nodes = query.execute(node);

    return nodes;
  }
}

export function footnoteMarkdownNodeFromNode(node) {
  const footnoteMarkdownNode = nodeFromNodeAndQuery(node, footnoteMarkdownNodeQuery);

  return footnoteMarkdownNode;
}

export function divisionMarkdownNodeFromNode(node) {
  const divisionMarkdownNode = nodeFromNodeAndQuery(node, divisionMarkdownNodeQuery);

  return divisionMarkdownNode;
}

export function subDivisionMarkdownNodeFromNode(node) {
  const subDivisionMarkdownNode = nodeFromNodeAndQuery(node, subDivisionMarkdownNodeQuery);

  return subDivisionMarkdownNode;
}

export function indexDirectiveMarkdownNodeFromNode(node) {
  const indexDirectiveMarkdownNode = nodeFromNodeAndQuery(node, indexDirectiveMarkdownNodeQuery);

  return indexDirectiveMarkdownNode;
}

export function ignoreDirectiveMarkdownNodeFromNode(node) {
  const ignoreDirectiveMarkdownNode = nodeFromNodeAndQuery(node, ignoreDirectiveMarkdownNodeQuery);

  return ignoreDirectiveMarkdownNode;
}

export function contentsDirectiveMarkdownNodeFromNode(node) {
  const contentsDirectiveMarkdownNode = nodeFromNodeAndQuery(node, contentsDirectiveMarkdownNodeQuery);

  return contentsDirectiveMarkdownNode;
}

export function footnotesDirectiveMarkdownNodeFromNode(node) {
  const footnotesDirectiveMarkdownNode = nodeFromNodeAndQuery(node, footnotesDirectiveMarkdownNodeQuery);

  return footnotesDirectiveMarkdownNode;
}

export function pageNumberDirectiveMarkdownNodeFromNode(node) {
  const pageNumberDirectiveMarkdownNode = nodeFromNodeAndQuery(node, pageNumberDirectiveMarkdownNodeQuery);

  return pageNumberDirectiveMarkdownNode;
}

export function headingMarkdownNodesFromNode(node, headingMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, headingMarkdownNodesQuery, headingMarkdownNodes);

  return headingMarkdownNodes;
}

export function divisionMarkdownNodesFromNode(node, divisionMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, divisionMarkdownNodesQuery, divisionMarkdownNodes);

  return divisionMarkdownNodes;
}

export function footnotesMarkdownNodesFromNode(node, footnotesMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, footnotesMarkdownNodesQuery, footnotesMarkdownNodes);

  return footnotesMarkdownNodes;
}

export function subDivisionMarkdownNodesFromNode(node, subDivisionMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, subDivisionMarkdownNodesQuery, subDivisionMarkdownNodes);

  return subDivisionMarkdownNodes;
}

export function footnoteLinkMarkdownNodesFromNode(node, linkMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, footnoteLinkMarkdownNodesQuery, linkMarkdownNodes);

  return linkMarkdownNodes;
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
  footnoteMarkdownNodeFromNode,
  indexDirectiveMarkdownNodeFromNode,
  ignoreDirectiveMarkdownNodeFromNode,
  contentsDirectiveMarkdownNodeFromNode,
  footnotesDirectiveMarkdownNodeFromNode,
  pageNumberDirectiveMarkdownNodeFromNode,
  headingMarkdownNodesFromNode,
  footnotesMarkdownNodesFromNode,
  footnoteLinkMarkdownNodesFromNode,
  embedDirectiveMarkdownNodesFromNode,
  includeDirectiveMarkdownNodesFromNode
};

function nodeFromNodeAndQuery(node, query) {
  const queryNodes = query.execute(node),
        queryNode = queryNodes.shift() || null;

  node = queryNode;  ///

  return node;
}

function nodesFromNodeAndQuery(node, query, nodes) {
  const queryNodes = query.execute(node);

  push(nodes, queryNodes);

  return nodes;
}
