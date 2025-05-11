"use strict";

import { nodeUtilities } from "occam-dom";

import CSSNode from "../node/css";
import HTMLNode from "../node/html";
import cssNodeMap from "../map/node/css";
import htmlNodeMap from "../map/node/html";
import TopmostCSSNode from "../node/css/topmost";
import TopmostHTMLNode from "../node/html/topmost";
import markdownQueries from "../queries/markdown";
import markdownStyleQueries from "../queries/markdownStyle";

import { nodesFromNodeAndQueries } from "../utilities/query";

const { topmostNodeFromOuterNodes } = nodeUtilities;

export function topmostHTMLNodeFromMarkdownNode(markdownNode) {
  const node = markdownNode,  ///
        queries = markdownQueries, ///
        nodes = nodesFromNodeAndQueries(node, queries),
        outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(HTMLClassFromOuterNode, outerNodes),
        topmostHTMLNode = topmostNode;  ///

  return topmostHTMLNode;
}

export function topmostHTMLNodeFromMarkdownNodes(markdownNodes) {
  const nodes = [],
        queries = markdownQueries;  ///

  markdownNodes.forEach((markdownNode) => {
    const node = markdownNode;  ///

    nodesFromNodeAndQueries(node, queries, nodes);
  });

  const outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(HTMLClassFromOuterNode, outerNodes),
        topmostHTMLNode = topmostNode;  ///

  return topmostHTMLNode;
}

export function topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode) {
  const node = markdownStyleNode,  ///
        queries = markdownStyleQueries, ///
        nodes = nodesFromNodeAndQueries(node, queries),
        outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(CSSClassFromOuterNode, outerNodes),
        topmostCSSNode = topmostNode;  ///

  return topmostCSSNode;
}

export function topmostCSSNodeFromMarkdownStyleNodes(markdownStyleNodes) {
  const nodes = [],
        queries = markdownStyleQueries;  ///

  markdownStyleNodes.forEach((markdownStyleNode) => {
    const node = markdownStyleNode;  ///

    nodesFromNodeAndQueries(node, queries, nodes);
  });

  const outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(CSSClassFromOuterNode, outerNodes),
        topmostCSSNode = topmostNode;  ///

  return topmostCSSNode;
}

export default {
  topmostHTMLNodeFromMarkdownNode,
  topmostHTMLNodeFromMarkdownNodes,
  topmostCSSNodeFromMarkdownStyleNode,
  topmostCSSNodeFromMarkdownStyleNodes,
};

function CSSClassFromOuterNode(outerNode) {
  let Class;

  if (outerNode === null) {
    Class = TopmostCSSNode;  ///
  } else {
    const nonTerminalNode = outerNode,  ///
          ruleName = nonTerminalNode.getRuleName();

    Class = cssNodeMap[ruleName] || CSSNode;
  }

  return Class;
}

function HTMLClassFromOuterNode(outerNode) {
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
