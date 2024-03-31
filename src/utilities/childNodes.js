"use strict";

import { arrayUtilities } from "necessary";

import PlainTextMarkdownNode from "../node/markdown/plainText";

import { EMPTY_STRING } from "../constants";
import { contentFromMarkdownNodes } from "./content";

const { clear } = arrayUtilities;

export function domElementsFromChildNodes(childNodes, context) {
  const domElements = [],
        plainTextMarkdownNodes = [];

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const childNodePlainTextMarkdownNode = (childNode instanceof PlainTextMarkdownNode);

      if (childNodePlainTextMarkdownNode) {
        const plainTextMarkdownNode = childNode; ///

        plainTextMarkdownNodes.push(plainTextMarkdownNode);
      } else {
        const textDOMElement = textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context)

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

  const textDOMElement = textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context)

  if (textDOMElement !== null) {
    const domElement = textDOMElement;  ///

    domElements.push(domElement);
  }

  return domElements;
}

export function htmlFromChildNodes(childNodes, context) {
  let html;

  const htmls = [],
        plainTextMarkdownNodes = [];

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const childNodePlainTextMarkdownNode = (childNode instanceof PlainTextMarkdownNode);

      if (childNodePlainTextMarkdownNode) {
        const plainTextMarkdownNode = childNode; ///

        plainTextMarkdownNodes.push(plainTextMarkdownNode);
      } else {
        html = htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context)

        if (html !== null) {
          htmls.push(html);
        }

        const indent = null;

        html = childNode.asHTML(indent, context);

        if (html !== null) {
          htmls.push(html);
        }
      }
    }
  });

  html = htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context)

  if (html !== null) {
    htmls.push(html);
  }

  html = htmls.join(EMPTY_STRING);

  return html;
}

function textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context) {
  let textDOMElement = null;

  const plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;

  if (plainTextMarkdownNodesLength > 0) {
    const markdownNodes = plainTextMarkdownNodes,  ///
          content = contentFromMarkdownNodes(markdownNodes, context);

    textDOMElement = document.createTextNode(content);

    clear(plainTextMarkdownNodes);
  }

  return textDOMElement;
}

function htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context) {
  let html = null;

  const plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;

  if (plainTextMarkdownNodesLength > 0) {
    const markdownNodes = plainTextMarkdownNodes,  ///
          content = contentFromMarkdownNodes(markdownNodes, context);

    html = content;

    clear(plainTextMarkdownNodes);
  }

  return html;
}
