"use strict";

import { Query } from "occam-query";
import { arrayUtilities } from "necessary";

const { first, push } = arrayUtilities;

const footnoteMarkdownNodeQuery = Query.fromExpression("/subDivision/footnote"),
      ignoreDirectiveMarkdownNodeQuery = Query.fromExpression("/division/subDivision/directives/ignoreDirective"),
      contentsDirectiveMarkdownNodeQuery = Query.fromExpression("/subDivision/directives/contentsDirective"),
      footnotesDirectiveMarkdownNodeQuery = Query.fromExpression("/subDivision/directives/footnotesDirective"),
      pageNumberDirectiveMarkdownNodeQuery = Query.fromExpression("/subDivision/directives/pageNumber"),  ///
      headingMarkdownNodesQuery = Query.fromExpression("/division/subDivision/primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading"),
      subDivisionMarkdownNodesQuery = Query.fromExpression("/division/subDivision"),
      footnoteLinkMarkdownNodesQuery = Query.fromExpression("//footnoteLink"),
      embedDirectiveMarkdownNodesQuery = Query.fromExpression("/subDivision/directives/embedDirective"),
      includeDirectiveMarkdownNodesQuery = Query.fromExpression("/subDivision/directives/includeDirective"),
      footnoteFootnoteLinkOrFootnotesDirectiveMarkdownNodesQuery = Query.fromExpression("//footnote|footnoteLink|footnotesDirective");

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

export function footnoteMarkdownNodeFromNode(node) {
  const footnoteMarkdownNode = nodeFromNodeAndQuery(node, footnoteMarkdownNodeQuery);

  return footnoteMarkdownNode;
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

export function footnoteFootnoteLinkOrFootnotesDirectiveMarkdownNodesFromNode(node, footnoteFootnoteLinkOrFootnotesDirectiveMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, footnoteFootnoteLinkOrFootnotesDirectiveMarkdownNodesQuery, footnoteFootnoteLinkOrFootnotesDirectiveMarkdownNodes);

  return footnoteFootnoteLinkOrFootnotesDirectiveMarkdownNodes;
}

export default {
  footnoteMarkdownNodeFromNode,
  ignoreDirectiveMarkdownNodeFromNode,
  contentsDirectiveMarkdownNodeFromNode,
  footnotesDirectiveMarkdownNodeFromNode,
  pageNumberDirectiveMarkdownNodeFromNode,
  headingMarkdownNodesFromNode,
  subDivisionMarkdownNodesFromNode,
  footnoteLinkMarkdownNodesFromNode,
  embedDirectiveMarkdownNodesFromNode,
  includeDirectiveMarkdownNodesFromNode,
  footnoteFootnoteLinkOrFootnotesDirectiveMarkdownNodesFromNode
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
