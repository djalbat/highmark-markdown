"use strict";

import HTMLTransform from "../transform/html";
import FootnoteHTMLNode from "../node/html/footnote";

import { htmlNodesFromNode } from "../utilities/html";
import { DEFAULT_MAXIMUM_PAGE_LINES } from "../constants";

export function groupHTMLNodes(htmlNodes) {
  const groupedHTMLNodesArray = [];

  let groupedHTMLNodes = [];

  htmlNodes.forEach((htmlNode) => {
    const htmlNodeFootnoteHTMLNode = (htmlNode instanceof FootnoteHTMLNode);

    if (!htmlNodeFootnoteHTMLNode) {
      const groupedHTMLNodeLength = groupedHTMLNodes.length;

      if (groupedHTMLNodeLength > 0) {
        groupedHTMLNodesArray.push(groupedHTMLNodes);

        groupedHTMLNodes = [];
      }
    }

    const groupedHTMLNode = htmlNode; ///

    groupedHTMLNodes.push(groupedHTMLNode);
  });

  const groupedHTMLNodeLength = groupedHTMLNodes.length;

  if (groupedHTMLNodeLength > 0) {
    groupedHTMLNodesArray.push(groupedHTMLNodes);
  }

  return groupedHTMLNodesArray;
}

export function removeHTMLNodes(node) {
  const htmlNodes = htmlNodesFromNode(node);

  htmlNodes.forEach((htmlNode) => {
    const htmlTransform = HTMLTransform.fromHTMLNode(htmlNode);

    htmlTransform.remove();
  });

  return htmlNodes;
}

export function paginateGroupedHTMLNodes(groupedHTMLNodesArray, context) {
  const paginatedHTMLNodesArray = [];

  const { maximumPageLines = DEFAULT_MAXIMUM_PAGE_LINES } = context;

  let pageLines = 0,
      paginatedHTMLNodes = [];

  groupedHTMLNodesArray.forEach((groupedHTMLNodes) => {
    const groupedLines = groupedHTMLNodes.reduce((groupedLines, groupedHTMLNode) => {
      const lines = groupedHTMLNode.lines(context);

      groupedLines += lines;

      return groupedLines;
    }, 0);

    const paginatedHTMLNodesLength = paginatedHTMLNodes.length;

    if (paginatedHTMLNodesLength > 0) {
      if (pageLines + groupedLines > maximumPageLines) {
        paginatedHTMLNodesArray.push(paginatedHTMLNodes);

        pageLines = 0;

        paginatedHTMLNodes = [];
      }
    }

    paginatedHTMLNodes.push(...groupedHTMLNodes);

    pageLines += groupedLines;
  });

  const paginatedHTMLNodesLength = paginatedHTMLNodes.length;

  if (paginatedHTMLNodesLength > 0) {
    paginatedHTMLNodesArray.push(paginatedHTMLNodes);
  }

  return paginatedHTMLNodesArray;
}
