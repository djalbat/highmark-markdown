"use strict";

import { Query } from "occam-query";

import { nodeFromNodeAndQuery, nodesFromNodeAndQuery } from "../utilities/query";

const headingHTMLNodesQuery = Query.fromExpressionString("//primaryHeading|secondaryHeading|tertiaryHeading|tertiaryHeading"),
      divisionHTMLNodesQuery = Query.fromExpressionString("/html/division"),
      footnoteHTMLNodesQuery = Query.fromExpressionString("//footnote"),
      footnoteLinkHTMLNodesQuery = Query.fromExpressionString("//footnoteLink"),
      indexDirectiveHTMLNodeQuery = Query.fromExpressionString("//indexDirective"),
      contentsDirectiveHTMLNodeQuery = Query.fromExpressionString("//contentsDirective"),
      footnotesDirectiveHTMLNodeQuery = Query.fromExpressionString("//footnotesDirective"),
      pageNumberDirectiveHTMLNodeQuery = Query.fromExpressionString("//pageNumberDirective");

export function headingHTMLNodesFromNode(node, headingHTMLNodes = []) {
  nodesFromNodeAndQuery(node, headingHTMLNodesQuery, headingHTMLNodes);

  return headingHTMLNodes;
}

export function divisionHTMLNodesFromNode(node, divisionHTMLNodes = []) {
  nodesFromNodeAndQuery(node, divisionHTMLNodesQuery, divisionHTMLNodes);

  return divisionHTMLNodes;
}

export function footnoteHTMLNodesFromNode(node, footnoteHTMLNodes = []) {
  nodesFromNodeAndQuery(node, footnoteHTMLNodesQuery, footnoteHTMLNodes);

  return footnoteHTMLNodes;
}

export function footnoteLinkHTMLNodesFromNode(node, footnoteLinkHTMLNodes = []) {
  nodesFromNodeAndQuery(node, footnoteLinkHTMLNodesQuery, footnoteLinkHTMLNodes);

  return footnoteLinkHTMLNodes;
}

export function indexDirectiveHTMLNodeFromNode(node) {
  const indexDirectiveHTMLNode = nodeFromNodeAndQuery(node, indexDirectiveHTMLNodeQuery);

  return indexDirectiveHTMLNode;
}

export function contentsDirectiveHTMLNodeFromNode(node) {
  const contentsDirectiveHTMLNode = nodeFromNodeAndQuery(node, contentsDirectiveHTMLNodeQuery);

  return contentsDirectiveHTMLNode;
}

export function footnotesDirectiveHTMLNodeFromNode(node) {
  const footnotesDirectiveHTMLNode = nodeFromNodeAndQuery(node, footnotesDirectiveHTMLNodeQuery);

  return footnotesDirectiveHTMLNode;
}

export function pageNumberDirectiveHTMLNodeFromNode(node) {
  const pageNumberDirectiveHTMLNode = nodeFromNodeAndQuery(node, pageNumberDirectiveHTMLNodeQuery);

  return pageNumberDirectiveHTMLNode;
}

export default {
  headingHTMLNodesFromNode,
  divisionHTMLNodesFromNode,
  footnoteHTMLNodesFromNode,
  footnoteLinkHTMLNodesFromNode,
  indexDirectiveHTMLNodeFromNode,
  contentsDirectiveHTMLNodeFromNode,
  footnotesDirectiveHTMLNodeFromNode,
  pageNumberDirectiveHTMLNodeFromNode
};
