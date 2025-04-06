"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";
import { contentFromNodes } from "../utilities/content";

const { first, last, clear } = arrayUtilities;

export function htmlFromMarkdownNode(markdownNode, context) {
  const htmls = [],
        plainTextMarkdownNodes = [];

  markdownNode.forEachChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            markdownNode = nonTerminalNode, ///
            markdownNodePlainTextMarkdownNode = markdownNode.isPlainTextMarkdownNode();

      if (markdownNodePlainTextMarkdownNode) {
        const plainTextMarkdownNode = markdownNode; ///

        plainTextMarkdownNodes.push(plainTextMarkdownNode);
      } else {
        const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, markdownNode, context);

        if (content !== null) {
          const html = content; ///

          htmls.push(html);
        }

        const indent = null,
              html = markdownNode.asHTML(indent, context);

        if (html !== null) {
          htmls.push(html);
        }
      }
    }
  });

  const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, markdownNode, context);

  if (content !== null) {
    const html = content; ///

    htmls.push(html);
  }

  const html = htmls.join(EMPTY_STRING);

  return html;
}

export function plainTextFromMarkdownNode(markdownNode, context) {
  const plainTexts = [],
        plainTextMarkdownNodes = [];

  markdownNode.forEachChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            markdownNode = nonTerminalNode, ///
            markdownNodePlainTextMarkdownNode = markdownNode.isPlainTextMarkdownNode();

      if (markdownNodePlainTextMarkdownNode) {
        const plainTextMarkdownNode = markdownNode; ///

        plainTextMarkdownNodes.push(plainTextMarkdownNode);
      } else {
        const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, markdownNode, context);

        if (content !== null) {
          const plainText = content;  ///

          plainTexts.push(plainText);
        }

        {
          const plainText = plainTextFromMarkdownNode(markdownNode, context);

          if (plainText !== EMPTY_STRING) {
            plainTexts.push(plainText);
          }
        }
      }
    }
  });

  const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, markdownNode, context);

  if (content !== null) {
    const plainText = content;  ///

    plainTexts.push(plainText);
  }

  const plainText = plainTexts.join(EMPTY_STRING);

  return plainText;
}

export function domElementsFromMarkdownNode(markdownNode, context) {
  const domElements = [],
        plainTextMarkdownNodes = [];

  markdownNode.forEachChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            markdownNode = nonTerminalNode, ///
            markdownNodePlainTextMarkdownNode = markdownNode.isPlainTextMarkdownNode();

      if (markdownNodePlainTextMarkdownNode) {
        const plainTextMarkdownNode = markdownNode; ///

        plainTextMarkdownNodes.push(plainTextMarkdownNode);
      } else {
        const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, markdownNode, context);

        if (content !== null) {
          const textNode = document.createTextNode(content),
                domElement = textNode;  ///

          domElements.push(domElement);
        }

        const domElement = markdownNode.createDOMElement(context);

        markdownNode.setDOMElement(domElement);

        domElements.push(domElement);
      }
    }
  });

  const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, markdownNode, context);

  if (content !== null) {
    const textNode = document.createTextNode(content),
          domElement = textNode;  ///

    domElements.push(domElement);
  }

  return domElements;
}

function contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, markdownNode, context) {
  let content = null;

  const plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;

  if (plainTextMarkdownNodesLength > 0) {
    const childNodes = plainTextMarkdownNodes, ///
          startChildNode = first(childNodes),
          endChildNode = last(childNodes),
          startChildNodeIndex = markdownNode.indexOfChildNode(startChildNode),
          endChildNodeIndex = markdownNode.indexOfChildNode(endChildNode),
          multiplicity = markdownNode.getMultiplicity(),
          lastChildNodeIndex = multiplicity - 1,
          firstChildNodeIndex = 0,
          augmentLeft = (endChildNodeIndex !== firstChildNodeIndex),
          augmentRight = (startChildNodeIndex !== lastChildNodeIndex),  ///
          nodes = childNodes; ///

    content = contentFromNodes(nodes, augmentLeft, augmentRight, context);

    clear(plainTextMarkdownNodes);
  }

  return content;
}
