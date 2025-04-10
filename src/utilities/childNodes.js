"use strict";

import { arrayUtilities } from "necessary";

import PlainTextHTMLNode from "../node/html/plainText";

import { EMPTY_STRING } from "../constants";
import { contentFromPlainTextHTMLNodes } from "../utilities/plainText";

const { clear } = arrayUtilities;

export function childNodesAsHTML(htmlNode, context) {
  let html;

  const htmls = [],
        plainTextHTMLNodes = [];

  htmlNode.forEachChildNode((childNode) => {
    const childNodePlainTextHTMLNode = (childNode instanceof PlainTextHTMLNode);

    if (childNodePlainTextHTMLNode) {
      const plainTextHTMLNode = childNode;  ///

      plainTextHTMLNodes.push(plainTextHTMLNode);
    } else {
      const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, htmlNode, context);

      clear(plainTextHTMLNodes);

      if (content !== null) {
        const html = content; ///

        htmls.push(html);
      }

      const indent = null,
            html = childNode.asHTML(indent, context);

      if (html !== null) {
        htmls.push(html);
      }
    }
  });

  const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, htmlNode, context);

  clear(plainTextHTMLNodes);

  if (content !== null) {
    const html = content; ///

    htmls.push(html);
  }

  html = htmls.join(EMPTY_STRING);

  return html;
}

export function childNodesAsPlainText(htmlNode, context) {
  let plainText;

  const plainTexts = [],
        plainTextHTMLNodes = [];

  htmlNode.forEachChildNode((childNode) => {
    const childNodePlainTextHTMLNode = (childNode instanceof PlainTextHTMLNode);

    if (childNodePlainTextHTMLNode) {
      const plainTextHTMLNode = childNode;  ///

      plainTextHTMLNodes.push(plainTextHTMLNode);
    } else {
      const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, htmlNode, context);

      clear(plainTextHTMLNodes);

      if (content !== null) {
        const plainText = content; ///

        plainTexts.push(plainText);
      }

      const plainText = childNode.asPlainText(context);

      if (plainText !== null) {
        plainTexts.push(plainText);
      }
    }
  });

  const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, htmlNode, context);

  clear(plainTextHTMLNodes);

  if (content !== null) {
    const plainText = content; ///

    plainTexts.push(plainText);
  }

  plainText = plainTexts.join(EMPTY_STRING);

  return plainText;
}

export function childNodesAsDOMElements(htmlNode, context) {
  const domElements = [],
        plainTextHTMLNodes = [];

  htmlNode.forEachChildNode((childNode) => {
    const childNodePlainTextHTMLNode = (childNode instanceof PlainTextHTMLNode);

    if (childNodePlainTextHTMLNode) {
      const plainTextHTMLNode = childNode;  ///

      plainTextHTMLNodes.push(plainTextHTMLNode);
    } else {
      const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, htmlNode, context);

      clear(plainTextHTMLNodes);

      if (content !== null) {
        const textNode = document.createTextNode(content),
              domElement = textNode;  ///

        domElements.push(domElement);
      }

      const domElement = childNode.createDOMElement(context);

      domElements.push(domElement);
    }
  });

  const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, htmlNode, context);

  clear(plainTextHTMLNodes);

  if (content !== null) {
    const textNode = document.createTextNode(content),
          domElement = textNode;  ///

    domElements.push(domElement);
  }

  return domElements;
}
