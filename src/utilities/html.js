"use strict";

import { Query } from "occam-query";

import { nodeFromNodeAndQuery, nodesFromNodeAndQuery } from "../utilities/query";

const indexDirectiveHTMLNodeQuery = Query.fromExpressionString("//indexDirective"),
      contentsDirectiveHTMLNodeQuery = Query.fromExpressionString("//contentsDirective"),
      footnotesDirectiveHTMLNodeQuery = Query.fromExpressionString("//footnotesDirective"),
      pageNumberDirectiveHTMLNodeQuery = Query.fromExpressionString("//pageNumberDirective"),
      htmlNodesQuery = Query.fromExpressionString("/division/*"),
      headingHTMLNodesQuery = Query.fromExpressionString("//primaryHeading|secondaryHeading|tertiaryHeading|tertiaryHeading"),
      divisionHTMLNodesQuery = Query.fromExpressionString("/html/division"),
      footnoteHTMLNodesQuery = Query.fromExpressionString("/division/footnote"),
      footnotesHTMLNodesQuery = Query.fromExpressionString("//footnote"),
      footnoteLinkHTMLNodesQuery = Query.fromExpressionString("//footnoteLink");

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

export function htmlNodesFromNode(node, htmlNodes = []) {
  nodesFromNodeAndQuery(node, htmlNodesQuery, htmlNodes);

  return htmlNodes;
}

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

export function footnotesHTMLNodesFromNode(node, footnotesHTMLNodes = []) {
  nodesFromNodeAndQuery(node, footnotesHTMLNodesQuery, footnotesHTMLNodes);

  return footnotesHTMLNodes;
}

export function footnoteLinkHTMLNodesFromNode(node, linkHTMLNodes = []) {
  nodesFromNodeAndQuery(node, footnoteLinkHTMLNodesQuery, linkHTMLNodes);

  return linkHTMLNodes;
}

export default {
  indexDirectiveHTMLNodeFromNode,
  contentsDirectiveHTMLNodeFromNode,
  footnotesDirectiveHTMLNodeFromNode,
  pageNumberDirectiveHTMLNodeFromNode,
  htmlNodesFromNode,
  headingHTMLNodesFromNode,
  divisionHTMLNodesFromNode,
  footnoteHTMLNodesFromNode,
  footnotesHTMLNodesFromNode,
  footnoteLinkHTMLNodesFromNode
};
