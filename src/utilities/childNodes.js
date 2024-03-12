"use strict";

import { arrayUtilities } from "necessary";

import TextMarkdownNode from "../node/markdown/text";

import { contentFromMarkdownNodes } from "./content";

const { clear } = arrayUtilities;

export function domElementsFromChildNodes(childNodes, context) {
  const domElements = [],
        textMarkdownNodes = [];

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const childNodeTextMarkdownNode = (childNode instanceof TextMarkdownNode);

      if (childNodeTextMarkdownNode) {
        const textMarkdownNode = childNode; ///

        textMarkdownNodes.push(textMarkdownNode);
      } else {
        const textDOMElement = textDOMElementFromTextMarkdownNodes(textMarkdownNodes, context)

        if (textDOMElement !== null) {
          const domElement = textDOMElement;  ///

          domElements.push(domElement);
        }

        const domElement = childNode.createDOMElement(context);

        if (domElement !== null) {
          domElements.push(domElement);
        }
      }
    }
  });

  const textDOMElement = textDOMElementFromTextMarkdownNodes(textMarkdownNodes, context)

  if (textDOMElement !== null) {
    const domElement = textDOMElement;  ///

    domElements.push(domElement);
  }

  return domElements;
}

function textDOMElementFromTextMarkdownNodes(textMarkdownNodes, context) {
  let textDOMElement = null;

  const textMarkdownNodesLength = textMarkdownNodes.length;

  if (textMarkdownNodesLength > 0) {
    const markdownNodes = textMarkdownNodes,  ///
          content = contentFromMarkdownNodes(markdownNodes, context);

    textDOMElement = document.createTextNode(content);

    clear(textMarkdownNodes);
  }

  return textDOMElement;
}

