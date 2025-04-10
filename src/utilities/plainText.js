"use strict";

import { arrayUtilities } from "necessary";

import { contentFromNodes } from "../utilities/content";

const { first, last } = arrayUtilities;

export function contentFromPlainTextHTMLNodes(plainTextHTMLNodes, htmlNode, context) {
  let content = null;

  const plainTextHTMLNodesLength = plainTextHTMLNodes.length;

  if (plainTextHTMLNodesLength > 0) {
    const markdownNodes = markdownNodesFromPlainTextHTMLNodes(plainTextHTMLNodes),
          markdownNode = htmlNode.getMarkdownNode(),
          parentNode = markdownNode,  ///
          childNodes = markdownNodes, ///
          endChildNode = last(childNodes),
          startChildNode = first(childNodes),
          startChildNodeIndex = parentNode.indexOfChildNode(startChildNode),
          endChildNodeIndex = parentNode.indexOfChildNode(endChildNode),
          multiplicity = parentNode.getMultiplicity(),
          firstChildNodeIndex = 0,
          lastChildNodeIndex = multiplicity - 1,
          augmentLeft = (endChildNodeIndex !== firstChildNodeIndex),
          augmentRight = (startChildNodeIndex !== lastChildNodeIndex),  ///
          nodes = childNodes; ///

    content = contentFromNodes(nodes, augmentLeft, augmentRight, context);
  }

  return content;
}

function markdownNodesFromPlainTextHTMLNodes(plainTextHTMLNodes) {
  const markdownNodes = plainTextHTMLNodes.map((plainTextHTMLNode) => {
    const markdownNode = plainTextHTMLNode.getMarkdownNode();

    return markdownNode;
  });

  return markdownNodes;
}
