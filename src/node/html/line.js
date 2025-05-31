"use strict";

import HTMLNode from "../../node/html";
import PlainTextHTMLNode from "./text/plain";

import { remove, insertAfterwards } from "../../utilities/dom";
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

    super.mount(parentDOMElement, siblingDOMElement, context);

    domElement = this.getDOMElement();

    parentDOMElement = domElement;  ///

    const content = CARRIAGE_RETURN,
      textNode = document.createTextNode(content);

    domElement = textNode;  ///

    insertAfterwards(domElement, parentDOMElement);

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

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    let childNodesPlainText;

    childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode) => {
      const childNodePlainText = childNode.asPlainText(context);

      childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;

      return childNodesPlainText;
    }, EMPTY_STRING);

    return childNodesPlainText;
  }

  static tagName = "span";

  static className = "line";

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = LineHTMLNode; ///
    }

    const lineHTMLNode = HTMLNode.fromNothing(Class);

    return lineHTMLNode;
  }

  static fromOuterNode(Class, outerNode) {
    if (outerNode === undefined) {
      outerNode = Class;  ///

      Class = LineHTMLNode; ///
    }

    const lineHTMLNode = HTMLNode.fromOuterNode(Class, outerNode);

    return lineHTMLNode;
  }
}
