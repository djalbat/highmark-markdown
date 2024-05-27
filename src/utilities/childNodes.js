"use strict";

import { arrayUtilities } from "necessary";

import PlainTextMarkdownNode from "../node/markdown/plainText";

import { EMPTY_STRING } from "../constants";
import { contentFromMarkdownNodes } from "./content";

const { clear } = arrayUtilities;

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

  html = html.replace(/\n$/, EMPTY_STRING);

  html = `${html}\n`;

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

        const domElement = markdownNode.createDOMElement(context);

        if (domElement !== null) {
          domElements.push(domElement);
        }
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
