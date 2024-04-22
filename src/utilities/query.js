"use strict";

import { Query } from "occam-query";
import { arrayUtilities } from "necessary";

const { first, push } = arrayUtilities;

const linkMarkdownNodesQuery = Query.fromExpression(`//link`),
      headingMarkdownNodesQuery = Query.fromExpression(`//primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading`),
      contentsMarkdownNodeQuery = Query.fromExpression(`//contents`),
      footnoteMarkdownNodesQuery = Query.fromExpression(`//footnote`),
      footnotesMarkdownNodeQuery = Query.fromExpression(`/division/subDivision/footnotes`),
      footnotesMarkdownNodesQuery = Query.fromExpression(`//footnotes`),
      referenceMarkdownNodesQuery = Query.fromExpression(`//reference`),
      linkReferenceOrFootnotesMarkdownNodesQuery = Query.fromExpression(`//link|reference|footnotes`);

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
  const contentsMarkdownNode = nodeFromNodeAndQuery(node, contentsMarkdownNodeQuery);

  return contentsMarkdownNode;
}

export function footnotesMarkdownNodeFromNode(node) {
  const footnotesMarkdownNode = nodeFromNodeAndQuery(node, footnotesMarkdownNodeQuery);

  return footnotesMarkdownNode;
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

export function footnotesMarkdownNodesFromNode(node, footnotesMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, footnotesMarkdownNodesQuery, footnotesMarkdownNodes);

  return footnotesMarkdownNodes;
}

export function linkReferenceOrFootnotesMarkdownNodesFromNode(node, linkReferenceOrFootnotesMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, linkReferenceOrFootnotesMarkdownNodesQuery, linkReferenceOrFootnotesMarkdownNodes);

  return linkReferenceOrFootnotesMarkdownNodes;
}

export default {
  linkMarkdownNodesFromNode,
  contentsMarkdownNodeFromNode,
  footnotesMarkdownNodeFromNode,
  headingMarkdownNodesFromNode,
  footnoteMarkdownNodesFromNode,
  referenceMarkdownNodesFromNode,
  footnotesMarkdownNodesFromNode,
  linkReferenceOrFootnotesMarkdownNodesFromNode
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
