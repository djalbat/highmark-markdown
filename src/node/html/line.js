"use strict";

import HTMLNode from "../../node/html";

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

  prepare(context) {
    const markdownNode = this.getMarkdownNode(),
          firstTokenIndex = markdownNode.getFirstTokenIndex(context),
          tokenIndex = firstTokenIndex; ///

    Object.assign(context, {
      tokenIndex
    });
  }

  dispose(context) {
    delete context.tokenIndex;
  }

  remount(context) {
    const domElement = this.getDOMElement(),
          parentDOMElement = domElement.parentElement,
          siblingDOMElement = domElement.previousSibling;

    this.prepare(context);

    this.unmount(parentDOMElement);

    this.mount(parentDOMElement, siblingDOMElement, context);

    this.dispose(context);
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    let domElement;

    this.prepare(context);

    super.mount(parentDOMElement, siblingDOMElement, context);

    domElement = this.getDOMElement();

    parentDOMElement = domElement;  ///

    const content = CARRIAGE_RETURN,
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    insertAfterwards(domElement, parentDOMElement);

    domElement = this.getDOMElement();

    siblingDOMElement = domElement; ///

    this.dispose(context);

    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    {
      let domElement;

      domElement = this.getDOMElement();

      const parentDOMElement = domElement,  ///
            lastChild = domElement.lastChild

      domElement = lastChild;  ///

      remove(domElement, parentDOMElement);
    }

    super.unmount(parentDOMElement);
  }

  asHTML(indent, context) {
    let html;

    this.prepare(context);

    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context);

    const startingTag = this.startingTag(context),
          closingTag = this.closingTag(context);

    html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;

    this.dispose(context);

    return html;
  }

  asPlainText(context) {
    let plainText;

    this.prepare(context);

    plainText = super.asPlainText(context);

    this.dispose(context);

    return plainText;
  }

  childNodesAsPlainText(context) {
    const childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode) => {
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
