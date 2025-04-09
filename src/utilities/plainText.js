"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";
import { contentFromNodes } from "../utilities/content";

const { first, last } = arrayUtilities;

export function plainTextFromPlainTextHTMLNode(plainTextHTMLNode, context) {
  const plainTexts = [],
        plainTextHTMLNodes = [];

  plainTextHTMLNode.forEachChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            plainTextHTMLNode = nonTerminalNode, ///
            plainTextHTMLNodePlainTextHTMLNode = plainTextHTMLNode.isPlainTextHTMLNode();

      if (plainTextHTMLNodePlainTextHTMLNode) {
        const plainTextHTMLNode = plainTextHTMLNode; ///

        plainTextHTMLNodes.push(plainTextHTMLNode);
      } else {
        const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, plainTextHTMLNode, context);

        if (content !== null) {
          const plainText = content;  ///

          plainTexts.push(plainText);
        }

        {
          const plainText = plainTextFromPlainTextHTMLNode(plainTextHTMLNode, context);

          if (plainText !== EMPTY_STRING) {
            plainTexts.push(plainText);
          }
        }
      }
    }
  });

  const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, plainTextHTMLNode, context);

  if (content !== null) {
    const plainText = content;  ///

    plainTexts.push(plainText);
  }

  const plainText = plainTexts.join(EMPTY_STRING);

  return plainText;
}

export function domElementsFromPlainTextHTMLNode(plainTextHTMLNode, context) {
  const domElements = [],
        plainTextHTMLNodes = [];

  plainTextHTMLNode.forEachChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            plainTextHTMLNode = nonTerminalNode, ///
            plainTextHTMLNodePlainTextHTMLNode = plainTextHTMLNode.isPlainTextHTMLNode();

      if (plainTextHTMLNodePlainTextHTMLNode) {
        const plainTextHTMLNode = plainTextHTMLNode; ///

        plainTextHTMLNodes.push(plainTextHTMLNode);
      } else {
        const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, plainTextHTMLNode, context);

        if (content !== null) {
          const textNode = document.createTextNode(content),
                domElement = textNode;  ///

          domElements.push(domElement);
        }

        const domElement = plainTextHTMLNode.createDOMElement(context);

        plainTextHTMLNode.setDOMElement(domElement);

        domElements.push(domElement);
      }
    }
  });

  const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, plainTextHTMLNode, context);

  if (content !== null) {
    const textNode = document.createTextNode(content),
          domElement = textNode;  ///

    domElements.push(domElement);
  }

  return domElements;
}

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
