"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";
import { contentFromNodes } from "../utilities/content";

const { first, last, push, clear } = arrayUtilities;

export function htmlFromChildNodes(childNodes, context) {
  const htmls = [],
        plainTextMarkdownNodes = [];

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            markdownNode = nonTerminalNode, ///
            markdownNodePlainTextMarkdownNode = markdownNode.isPlainTextMarkdownNode();

      if (markdownNodePlainTextMarkdownNode) {
        const plainTextMarkdownNode = markdownNode; ///

        plainTextMarkdownNodes.push(plainTextMarkdownNode);
      } else {
        const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);

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

  const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);

  if (content !== null) {
    const html = content; ///

    htmls.push(html);
  }

  const html = htmls.join(EMPTY_STRING);

  return html;
}

export function plainTextFromChildNodes(childNodes, context) {
  const plainTexts = [],
        plainTextMarkdownNodes = [];

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            markdownNode = nonTerminalNode, ///
            markdownNodePlainTextMarkdownNode = markdownNode.isPlainTextMarkdownNode();

      if (markdownNodePlainTextMarkdownNode) {
        const plainTextMarkdownNode = markdownNode; ///

        plainTextMarkdownNodes.push(plainTextMarkdownNode);
      } else {
        const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);

        if (content !== null) {
          const plainText = content;  ///

          plainTexts.push(plainText);
        }

        {
          const childNodes = markdownNode.getChildNodes(),
                plainText = plainTextFromChildNodes(childNodes, context);

          if (plainText !== EMPTY_STRING) {
            plainTexts.push(plainText);
          }
        }
      }
    }
  });

  const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);

  if (content !== null) {
    const plainText = content;  ///

    plainTexts.push(plainText);
  }

  const plainText = plainTexts.join(EMPTY_STRING);

  return plainText;
}

export function domElementsFromChildNodes(childNodes, context) {
  const domElements = [],
        plainTextMarkdownNodes = [];

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            markdownNode = nonTerminalNode, ///
            markdownNodePlainTextMarkdownNode = markdownNode.isPlainTextMarkdownNode();

      if (markdownNodePlainTextMarkdownNode) {
        const plainTextMarkdownNode = markdownNode; ///

        plainTextMarkdownNodes.push(plainTextMarkdownNode);
      } else {
        const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);

        if (content !== null) {
          const textNode = document.createTextNode(content),
                domElement = textNode;  ///

          domElements.push(domElement);
        }

        markdownNode.createDOMElement(context);

        const markdownNodeDOMElements = markdownNode.getDOMElements();

        push(domElements, markdownNodeDOMElements);
      }
    }
  });

  const content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);

  if (content !== null) {
    const textNode = document.createTextNode(content),
          domElement = textNode;  ///

    domElements.push(domElement);
  }

  return domElements;
}

function contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context) {
  let content = null;

  const plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;

  if (plainTextMarkdownNodesLength > 0) {
    const nodes = plainTextMarkdownNodes, ///
          lastNode = last(nodes),
          firstNode = first(nodes),
          lastNodeIndex = childNodes.indexOf(lastNode),
          firstNodeIndex = childNodes.indexOf(firstNode),
          childNodesLength = childNodes.length,
          lastChildNodeIndex = childNodesLength - 1,
          firstChildNodeIndex = 0,
          augmentLeft = (firstNodeIndex !== firstChildNodeIndex),
          augmentRight = (lastNodeIndex !== lastChildNodeIndex);  ///

    content = contentFromNodes(nodes, augmentLeft, augmentRight, context);

    clear(plainTextMarkdownNodes);
  }

  return content;
}
