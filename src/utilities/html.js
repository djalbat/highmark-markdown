"use strict";

import { Query } from "occam-query";

import { nodeFromNodeAndQuery, nodesFromNodeAndQuery } from "../utilities/query";

const footnoteHTMLNodeQuery = Query.fromExpressionString("/division/footnote"),
      ignoreDirectiveHTMLNodeQuery = Query.fromExpressionString("/division/subDivision/directives/ignoreDirective"),
      contentsDirectiveHTMLNodeQuery = Query.fromExpressionString("/division/subDivision/directives/contentsDirective"),
      footnotesDirectiveHTMLNodeQuery = Query.fromExpressionString("/division/subDivision/directives/footnotesDirective"),
      pageNumberDirectiveHTMLNodeQuery = Query.fromExpressionString("//directives/pageNumber"),  ///
      headingHTMLNodesQuery = Query.fromExpressionString("/division/primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading"),  ///
      divisionHTMLNodesQuery = Query.fromExpressionString("/html/division"),  ///
      footnotesHTMLNodesQuery = Query.fromExpressionString("//footnote|footnoteLink|footnotesDirective"), ///
      footnoteLinkHTMLNodesQuery = Query.fromExpressionString("//footnoteLink");

export function footnoteHTMLNodeFromNode(node) {
  const footnoteHTMLNode = nodeFromNodeAndQuery(node, footnoteHTMLNodeQuery);

  return footnoteHTMLNode;
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

export function headingHTMLNodesFromNode(node, headingHTMLNodes = []) {
  nodesFromNodeAndQuery(node, headingHTMLNodesQuery, headingHTMLNodes);

  return headingHTMLNodes;
}

export function divisionHTMLNodesFromNode(node, divisionHTMLNodes = []) {
  nodesFromNodeAndQuery(node, divisionHTMLNodesQuery, divisionHTMLNodes);

  return divisionHTMLNodes;
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
  footnoteHTMLNodeFromNode,
  contentsDirectiveHTMLNodeFromNode,
  footnotesDirectiveHTMLNodeFromNode,
  pageNumberDirectiveHTMLNodeFromNode,
  headingHTMLNodesFromNode,
  divisionHTMLNodesFromNode,
  footnotesHTMLNodesFromNode,
  footnoteLinkHTMLNodesFromNode
};

// export function postProcess(divisionHTMLNodes, context) {
//   const footnoteReplacementMap = prepareFootnotes(divisionHTMLNodes, context),
//         markdownNodes = paginate(divisionHTMLNodes, context);
//
//   divisionHTMLNodes = divisionHTMLNodesFromHTMLNodes(markdownNodes);  ///
//
//   createFootnotes(divisionHTMLNodes, footnoteReplacementMap, context);
//
//   createContents(divisionHTMLNodes, context);
//
//   createIndex(divisionHTMLNodes, context);
// }
//
// function paginate(divisionHTMLNodes, context) {
//   const pageNumber = 1,
//         markdownNOdes = [];
//
//   Object.assign(context, {
//     pageNumber
//   });
//
//   divisionHTMLNodes.forEach((divisionHTMLNode) => {
//     divisionHTMLNode.paginate(markdownNOdes, context);
//   });
//
//   delete context.pageNumber;
//
//   return markdownNOdes;
// }
//
// function createIndex(divisionHTMLNodes, context) {
//   divisionHTMLNodes.some((divisionHTMLNode) => {
//     const indexCreated = divisionHTMLNode.createIndex(divisionHTMLNodes, context);
//
//     if (indexCreated) {
//       return true;
//     }
//   });
// }
//
// function createContents(divisionHTMLNodes, context) {
//   divisionHTMLNodes.some((divisionHTMLNode) => {
//     const contentsCreated = divisionHTMLNode.createContents(divisionHTMLNodes, context);
//
//     if (contentsCreated) {
//       return true;
//     }
//   });
// }
//
// function createFootnotes(divisionHTMLNodes, footnoteReplacementMap, context) {
//   divisionHTMLNodes.forEach((divisionHTMLNode) => {
//     divisionHTMLNode.createFootnotes(footnoteReplacementMap, context);
//   });
// }
//
// function prepareFootnotes(divisionHTMLNodes, context) {
//   const footnoteReplacementMap = {};
//
//   divisionHTMLNodes.forEach((divisionHTMLNode) => {
//     divisionHTMLNode.prepareFootnotes(footnoteReplacementMap, context);
//   });
//
//   return footnoteReplacementMap;
// }
//
// export default {
//   postProcess
// }