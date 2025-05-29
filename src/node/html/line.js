"use strict";

import HTMLNode from "../../node/html";
import PlainTextHTMLNode from "./text/plain";

import {insertAfterwards, remove} from "../../utilities/dom";
import { assignIndexes, deleteIndexes } from "../../utilities/whitespace";
import { EMPTY_STRING, CARRIAGE_RETURN, DEFAULT_MAXIMUM_LINE_CHARACTERS } from "../../constants";

export default class LineHTMLNode extends HTMLNode {
  lines(context) {
    const { maximumLineCharacters = DEFAULT_MAXIMUM_LINE_CHARACTERS } = context,
          plainText = this.asPlainText(context),
          plainTextLength = plainText.length,
          characters = plainTextLength, ///
          lines = (characters / maximumLineCharacters) + 1;

    return lines;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    let domElement;

    const htmlNode = this;  ///

    assignIndexes(htmlNode, context);

    super.mount(parentDOMElement, siblingDOMElement, context);

    domElement = this.getDOMElement();

    parentDOMElement = domElement;  ///

    const content = CARRIAGE_RETURN,
      textNode = document.createTextNode(content);

    domElement = textNode;  ///

    insertAfterwards(domElement, parentDOMElement);

    deleteIndexes(context);

    domElement = this.getDOMElement();

    siblingDOMElement = domElement; ///

    return siblingDOMElement;
  }

  unmount(parentDOMElement, context) {
    {
      let domElement;

      domElement = this.getDOMElement();

      const parentDOMElement = domElement,  ///
            lastChild = domElement.lastChild

      domElement = lastChild;  ///

      remove(domElement, parentDOMElement);
    }

    super.unmount(parentDOMElement, context);
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    const htmlNode = this;  ///

    assignIndexes(htmlNode, context);

    let previousChildNode = null;

    childNodesHTML = this.reduceChildNode((childNodesHTML, childNode) => {
      const previousChildNodePlainTextHTMLNode = (previousChildNode instanceof PlainTextHTMLNode);

      if (previousChildNodePlainTextHTMLNode) {
        const childNodePlainTextHTMLNode = (childNode instanceof PlainTextHTMLNode);

        if (!childNodePlainTextHTMLNode) {
          childNodesHTML = `${childNodesHTML}
`;
        }
      }

      const childNodeHTML = childNode.asHTML(indent, context);

      childNodesHTML = `${childNodesHTML}${childNodeHTML}`;

      previousChildNode = childNode;  ///

      return childNodesHTML;
    }, EMPTY_STRING);

    const previousChildNodePlainTextHTMLNode = (previousChildNode instanceof PlainTextHTMLNode);

    if (previousChildNodePlainTextHTMLNode) {
      childNodesHTML = `${childNodesHTML}
`;
    }

    deleteIndexes(context);

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    let childNodesPlainText;

    const htmlNode = this;  ///

    assignIndexes(htmlNode, context)

    childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode) => {
      const childNodePlainText = childNode.asPlainText(context);

      childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;

      return childNodesPlainText;
    }, EMPTY_STRING);

    deleteIndexes(context);

    return childNodesPlainText;
  }

  static tagName = "span";

  static className = "line";

  static fromNothing() { return HTMLNode.fromNothing(LineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(LineHTMLNode, outerNode); }
}
