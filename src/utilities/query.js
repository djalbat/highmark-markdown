"use strict";

import { Query } from "occam-query";
import { arrayUtilities } from "necessary";

const { first, push } = arrayUtilities;

const linkMarkdownNodesQuery = Query.fromExpression(`//link`),
      embedMarkdownNodesQuery = Query.fromExpression(`//embed`),
      headingMarkdownNodesQuery = Query.fromExpression(`//primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading`),
      footnoteMarkdownNodesQuery = Query.fromExpression(`//footnote`),
      footnotesMarkdownNodesQuery = Query.fromExpression(`//footnotes`),
      ignoreDirectiveMarkdownNodeQuery = Query.fromExpression(`//ignoreDirective`),
      contentsDirectiveMarkdownNodeQuery = Query.fromExpression(`//contentsDirective`),
      footnotesDirectiveMarkdownNodeQuery = Query.fromExpression(`//footnotesDirective`),
      linkFootnoteOrFootnotesMarkdownNodesQuery = Query.fromExpression(`//link|footnote|footnotes`);

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

export function embedMarkdownNodesFromNode(node, embedMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, embedMarkdownNodesQuery, embedMarkdownNodes);

  return embedMarkdownNodes;
}

export function headingMarkdownNodesFromNode(node, headingMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, headingMarkdownNodesQuery, headingMarkdownNodes);

  return headingMarkdownNodes;
}

export function footnoteMarkdownNodesFromNode(node, footnoteMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, footnoteMarkdownNodesQuery, footnoteMarkdownNodes);

  return footnoteMarkdownNodes;
}

export function footnotesMarkdownNodesFromNode(node, footnotesMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, footnotesMarkdownNodesQuery, footnotesMarkdownNodes);

  return footnotesMarkdownNodes;
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

export function linkFootnoteOrFootnotesMarkdownNodesFromNode(node, linkFootnoteOrFootnotesMarkdownNodes = []) {
  nodesFromNodeAndQuery(node, linkFootnoteOrFootnotesMarkdownNodesQuery, linkFootnoteOrFootnotesMarkdownNodes);

  return linkFootnoteOrFootnotesMarkdownNodes;
}

export default {
  linkMarkdownNodesFromNode,
  embedMarkdownNodesFromNode,
  headingMarkdownNodesFromNode,
  footnoteMarkdownNodesFromNode,
  footnotesMarkdownNodesFromNode,
  ignoreDirectiveMarkdownNodeFromNode,
  contentsDirectiveMarkdownNodeFromNode,
  footnotesDirectiveMarkdownNodeFromNode,
  linkFootnoteOrFootnotesMarkdownNodesFromNode
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
