"use strict";

import { Node } from "occam-dom";

import nodeMixins from "../mixins/node";

import { EMPTY_STRING, DOUBLE_SPACE } from "../constants";

class HTMLNode extends Node {
  constructor(outerNode, parentNode, childNodes, domElement) {
    super(outerNode, parentNode, childNodes);

    this.domElement = domElement;
  }

  getDOMElement() {
    return this.domElement;
  }

  setDOMElement(domElement) {
    this.domElement = domElement;
  }

  resetDOMElement() {
    this.domElement = null;
  }

  getMarkdownNode() {
    const outerNode = this.getOuterNode(),
          markdownNode = outerNode; ///

    return markdownNode;
  }

  getRuleName() { return this.outerNode.getRuleName(); }

  isTerminalNode() {
    const terminalNode = false;

    return terminalNode;
  }

  isNonTerminalNode() {
    const nonTerminalNode = true;

    return nonTerminalNode;
  }

  adjustIndent(indent) {
    indent = (indent === null) ?
               EMPTY_STRING :
                `${DOUBLE_SPACE}${indent}`;

    return indent;
  }

  lines(context) {
    let lines;

    ({ lines = null } = this.constructor);

    if (lines === null) {
      lines = this.reduceChildNode((lines, childNode) => {
        const childNodeLines = childNode.lines(context);

        lines += childNodeLines;

        return lines;
      }, 0);
    }

    return lines;
  }

  tagName(context) {
    const { tagName } = this.constructor;

    return tagName;
  }

  className(context) {
    const { className } = this.constructor;

    return className;
  }

  closingTag(context) {
    const tagName = this.tagName(context),
          closingTag = `</${tagName}>`;

    return closingTag;
  }

  startingTag(context) {
    const tagName = this.tagName(context),
          className = this.className(context),
          attributeName = this.attributeName(context),
          attributeValue = this.attributeValue(context),
          classHTML = (className !== null) ?
                       ` class="${className}"` :
                          EMPTY_STRING,
          attributeHTML = ((attributeName !== null) && (attributeValue !== null)) ?
                           ` ${attributeName}="${attributeValue}"` :
                              EMPTY_STRING,
          startingTag = `<${tagName}${classHTML}${attributeHTML}>`;

    return startingTag;
  }

  selfClosingTag(context) {
    const tagName = this.tagName(context),
          className = this.className(context),
          attributeName = this.attributeName(context),
          attributeValue = this.attributeValue(context),
          classHTML = (className !== null) ?
                       ` class="${className}"` :
                          EMPTY_STRING,
          attributeHTML = ((attributeName !== null) && (attributeValue !== null)) ?
                           ` ${attributeName}="${attributeValue}"` :
                              EMPTY_STRING,
          selfClosingTag = `<${tagName}${classHTML}${attributeHTML}/>`;

    return selfClosingTag;
  }

  attributeName(context) {
    const attributeName = null;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = null;

    return attributeValue;
  }

  createDOMElement(context) {
    let domElement;

    const tagName = this.tagName(context);

    domElement = document.createElement(tagName);

    const className = this.className(context),
          attributeName = this.attributeName(context),
          attributeValue = this.attributeValue(context);

    if (className !== null) {
      Object.assign(domElement, {
        className
      });
    }

    if ((attributeName !== null) && (attributeValue !== null)) {
      domElement.setAttribute(attributeName, attributeValue);
    }

    return domElement;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    this.domElement = this.createDOMElement(context);

    parentDOMElement.insertBefore(this.domElement, siblingDOMElement)

    parentDOMElement = this.domElement; ///

    siblingDOMElement = null;

    this.childNodes.forEach((childNode) => {
      childNode.mount(parentDOMElement, siblingDOMElement, context);
    });
  }

  unmount(parentDOMElement, context) {
    {
      const parentDOMElement = this.domElement; ///

      this.childNodes.forEach((childNode) => {
        childNode.unmount(parentDOMElement, context);
      });
    }

    parentDOMElement.removeChild(this.domElement);

    this.domElement = null;
  }

  asHTML(indent, context) {
    if (context === undefined) {
      context = indent; ///

      indent = EMPTY_STRING;
    }

    let html;

    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context);

    if (childNodesHTML !== EMPTY_STRING) {
      const startingTag = this.startingTag(context),
            closingTag = this.closingTag(context);

      html = `${indent}${startingTag}
${childNodesHTML}${indent}${closingTag}
`;
    } else {
      const selfClosingTag = this.selfClosingTag(context);

      html = `${indent}${selfClosingTag}
`;
    }

    return html;
  }

  asPlainText(context) {
    let plainText;

    const childNodesPlainText = this.childNodesAsPlainText(context);

    plainText = childNodesPlainText;  ///

    return plainText;
  }

  childNodesAsHTML(indent, context) {
    const childNodesHTML = this.reduceChildNode((childNodesHTML, childNode) => {
      const childNodeHTML = childNode.asHTML(indent, context);

      childNodesHTML = `${childNodesHTML}${childNodeHTML}`;

      return childNodesHTML;
    }, EMPTY_STRING);

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    const childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode) => {
      const childNodePlainText = childNode.asPlainText(context);

      childNodesPlainText = `${childNodesPlainText}
${childNodePlainText}`;

      return childNodesPlainText;
    }, EMPTY_STRING);

    return childNodesPlainText;
  }

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = HTMLNode; ///
    }

    const domElement = null,
          node = Node.fromNothing(Class, domElement);

    return node;
  }

  static fromOuterNode(Class, outerNode) {
    if (outerNode === undefined) {
      outerNode = Class;  ///

      Class = HTMLNode; ///
    }

    const domElement = null,
          node = Node.fromOuterNode(Class, outerNode, domElement);

    return node;
  }
}

Object.assign(HTMLNode.prototype, nodeMixins);

export default HTMLNode;
