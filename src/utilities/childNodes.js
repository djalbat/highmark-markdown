"use strict";

import { arrayUtilities } from "necessary";

import PlainTextMarkdownNode from "../node/markdown/plainText";

import { EMPTY_STRING } from "../constants";
import { contentFromMarkdownNodes } from "./content";

const { clear } = arrayUtilities;

export function htmlFromChildNodes(childNodes, context, trimmed) {
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
        html = htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed)

        if (html !== null) {
          htmls.push(html);

          trimmed = false;
        }

        const indent = null;

        html = markdownNode.asHTML(indent, context);

        if (html !== null) {
          htmls.push(html);
        }
      }
    }
  });

  html = htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed)

  if (html !== null) {
    htmls.push(html);
  }

  html = htmls.join(EMPTY_STRING);

  return html;
}

export function domElementsFromChildNodes(childNodes, context, trimmed) {
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
        const textDOMElement = textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed)

        if (textDOMElement !== null) {
          const domElement = textDOMElement;  ///

          domElements.push(domElement);

          trimmed = false;
        }

        const domElement = markdownNode.createDOMElement(context);

        if (domElement !== null) {
          domElements.push(domElement);
        }
      }
    }
  });

  const textDOMElement = textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed)

  if (textDOMElement !== null) {
    const domElement = textDOMElement;  ///

    domElements.push(domElement);
  }

  return domElements;
}

function htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed) {
  let html = null;

  const plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;

  if (plainTextMarkdownNodesLength > 0) {
    const markdownNodes = plainTextMarkdownNodes,  ///
          content = contentFromMarkdownNodes(markdownNodes, context, trimmed);

    html = content; ///

    clear(plainTextMarkdownNodes);
  }

  return html;
}

function textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed) {
  let textDOMElement = null;

  const plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;

  if (plainTextMarkdownNodesLength > 0) {
    const markdownNodes = plainTextMarkdownNodes,  ///
          content = contentFromMarkdownNodes(markdownNodes, context, trimmed);

    textDOMElement = document.createTextNode(content);

    clear(plainTextMarkdownNodes);
  }

  return textDOMElement;
}
