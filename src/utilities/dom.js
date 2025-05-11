"use strict";

import { nodeUtilities } from "occam-dom";

import HTMLNode from "../node/html";
import htmlNodeMap from "../map/node/html";
import markdownQueries from "../queries/markdown";
import TopmostHTMLNode from "../node/html/topmost";

import { nodesFromNodeAndQueries } from "../utilities/query";

const { topmostNodeFromOuterNodes } = nodeUtilities;

export function htmlNodeFromMarkdownNode(markdownNode) {
  const node = markdownNode,  ///
        queries = markdownQueries, ///
        nodes = nodesFromNodeAndQueries(node, queries),
        outerNodes = nodes, ///
        topmostNOde = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes),
        topmostHTMLNode = topmostNOde;  ///

  return topmostHTMLNode;
}

export function htmlNodeFromMarkdownNodes(markdownNodes) {
  const nodes = [],
        queries = markdownQueries;  ///

  markdownNodes.forEach((markdownNode) => {
    const node = markdownNode;  ///

    nodesFromNodeAndQueries(node, queries, nodes);
  });

  const outerNodes = nodes, ///
        topmostNOde = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes),
        topmostHTMLNode = topmostNOde;  ///

  return topmostHTMLNode;
}

export default {
  htmlNodeFromMarkdownNode,
  htmlNodeFromMarkdownNodes
};

function ClassFromOuterNode(outerNode) {
  let Class;

  if (outerNode === null) {
    Class = TopmostHTMLNode;  ///
  } else {
    const nonTerminalNode = outerNode,  ///
          ruleName = nonTerminalNode.getRuleName();

    Class = htmlNodeMap[ruleName] || HTMLNode;
  }

  return Class;
}
