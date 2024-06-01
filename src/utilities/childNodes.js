"use strict";

import { arrayUtilities } from "necessary";

import PlainTextMarkdownNode from "../node/markdown/plainText";

import { contentFromMarkdownNodes } from "./content";
import { CARRIAGE_RETURN, EMPTY_STRING } from "../constants";

const { push, clear } = arrayUtilities;

export function htmlFromChildNodes(childNodes, context, leftTrimmed) {
  let html;

  const htmls = [],
        plainTextMarkdownNodes = [];

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            markdownNode = nonTerminalNode, ///
            markdownNodePlainTextMarkdownNode = (markdownNode instanceof PlainTextMarkdownNode);

      if (markdownNodePlainTextMarkdownNode) {
        const plainTextMarkdownNode = markdownNode; ///

        plainTextMarkdownNodes.push(plainTextMarkdownNode);
      } else {
        const plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);

        if (plainText !== null) {
          const html = plainText; ///

          htmls.push(html);
        }

        const indent = null,
              html = markdownNode.asHTML(indent, context);

        if (html !== null) {
          htmls.push(html);
        }
      }
    }

    leftTrimmed = false;
  });

  const plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);

  if (plainText !== null) {
    const html = plainText; ///

    htmls.push(html);
  }

  html = htmls.join(EMPTY_STRING);

  return html;
}

export function plainTextFromChildNodes(childNodes, context, leftTrimmed) {
  let plainText;

  const plainTexts = [],
        plainTextMarkdownNodes = [];

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            markdownNode = nonTerminalNode, ///
            markdownNodePlainTextMarkdownNode = (markdownNode instanceof PlainTextMarkdownNode);

      if (markdownNodePlainTextMarkdownNode) {
        const plainTextMarkdownNode = markdownNode; ///

        plainTextMarkdownNodes.push(plainTextMarkdownNode);
      } else {
        plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);

        if (plainText !== null) {
          plainTexts.push(plainText);
        }

        const childNodes = markdownNode.getChildNodes();

        plainText = plainTextFromChildNodes(childNodes, context, leftTrimmed);

        if (plainText !== EMPTY_STRING) {
          plainTexts.push(plainText);
        }
      }
    }

    leftTrimmed = false;
  });

  plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);

  if (plainText !== null) {
    plainTexts.push(plainText);
  }

  plainText = plainTexts.join(EMPTY_STRING);

  return plainText;
}

export function domElementsFromChildNodes(childNodes, context, leftTrimmed) {
  const domElements = [],
        plainTextMarkdownNodes = [];

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            markdownNode = nonTerminalNode, ///
            markdownNodePlainTextMarkdownNode = (markdownNode instanceof PlainTextMarkdownNode);

      if (markdownNodePlainTextMarkdownNode) {
        const plainTextMarkdownNode = markdownNode; ///

        plainTextMarkdownNodes.push(plainTextMarkdownNode);
      } else {
        const plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);

        if (plainText !== null) {
          const content = plainText,  ///
                textNode = document.createTextNode(content),
                domElement = textNode;  ///

          domElements.push(domElement);
        }

        markdownNode.createDOMElement(context);

        const markdownNodeDOMElements = markdownNode.getDOMElements();

        push(domElements, markdownNodeDOMElements);
      }
    }

    leftTrimmed = false;
  });

  const plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);

  if (plainText !== null) {
    const content = plainText,  ///
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    domElements.push(domElement);
  }

  const domElementsLength = domElements.length;

  if (domElementsLength === 0) {
    const content = CARRIAGE_RETURN,  ///
          textNode = document.createTextNode(content),
          domElement = textNode;  ///

    domElements.push(domElement);
  }

  return domElements;
}

function plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed) {
  let plainText = null;

  const plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;

  if (plainTextMarkdownNodesLength > 0) {
    const markdownNodes = plainTextMarkdownNodes,  ///
          rightTrimmed = false,
          content = contentFromMarkdownNodes(markdownNodes, context, leftTrimmed, rightTrimmed);

    plainText = content; ///

    clear(plainTextMarkdownNodes);
  }

  return plainText;
}
