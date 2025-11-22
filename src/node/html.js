"use strict";

import { Node } from "occam-dom";

import nodeMixins from "../mixins/node";

import { EMPTY_STRING, DOUBLE_SPACE } from "../constants";
import { remove, insertAfter, insertBeforehand } from "../utilities/dom";

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

  getRuleName() {
    const markdownNode = this.getMarkdownNode(),
          ruleName = markdownNode.getRuleName();

    return ruleName;
  }

  isTerminalNode() {
    const terminalNode = false;

    return terminalNode;
  }

  isNonTerminalNode() {
    const nonTerminalNode = true;

    return nonTerminalNode;
  }

  getMarkdownNode() {
    const outerNode = this.getOuterNode(),
          markdownNode = outerNode; ///

    return markdownNode;
  }

  getParentHTMLNode() {
    const parentNode = this.getParentNode(),
          parentHTMLNode = parentNode;  ///

    return parentHTMLNode;
  }

  getChildHTMLNodes() {
    const childNodes = this.getChildNodes(),
          childHTMLNodes = childNodes;  ///

    return childHTMLNodes;
  }

  getAncestorHTMLNodes() {
    const ancestorNodes = this.getAncestorNodes(),
          ancestorHTMLNodes = ancestorNodes;  ///

    return ancestorHTMLNodes;
  }

  reduceChildHTMLNode(callback, initialValue) { return this.reduceChildNode(callback, initialValue); }

  someAncestorHTMLNode(callback) { return this.someAncestorNode(callback); }

  someChildHTMLNode(callback) { return this.someChildNode(callback); }

  retrieveHTMLNode(callback) {
    let htmlNode = null;

    if (htmlNode === null) {
      const childHTMLNodes = this.getChildHTMLNodes();

      childHTMLNodes.some((childHTMLNode) => {
        htmlNode = childHTMLNode.retrieveHTMLNode(callback);

        if (htmlNode !== null) {
          return true;
        }
      });
    }

    if (htmlNode === null) {
      htmlNode = this;

      const result = callback(htmlNode);

      if (!result) {
        htmlNode = null;
      }
    }

    return htmlNode;
  }

  removeChildHTMLNodes(removedChildHTMLNodes = null) {
    let childHTMLNodes;

    childHTMLNodes = this.getChildHTMLNodes();

    if (removedChildHTMLNodes !== null) {
      childHTMLNodes = childHTMLNodes.filter((childHTMLNode) => { ///
        const markdownNode = childHTMLNode.getMarkdownNode(),
              index = removedChildHTMLNodes.findIndex((removedChildHTMLNode) => {
                const markdownNodeMatches = removedChildHTMLNode.matchMarkdownNode(markdownNode);

                if (markdownNodeMatches) {
                  return true;
                }
              });

        if (index !== -1) {
          return true;
        }
      });
    }

    let removedChildNodes = childHTMLNodes;  ///

    removedChildNodes = this.removeChildNodes(removedChildNodes);

    removedChildHTMLNodes = removedChildNodes;  ///

    return removedChildHTMLNodes;
  }

  matchMarkdownNode(markdownNode) {
    const outerNode = markdownNode, ///
          outerNodeMatches = this.matchOuterNode(outerNode),
          markdownNodeMatches = outerNodeMatches; ///

    return markdownNodeMatches;
  }

  addChildHTMLNodes(addedChildHTMLNodes, startHTNLIndex) {
    const addedChildNodes = addedChildHTMLNodes,  ///
          startIndex = startHTNLIndex;  ///

    this.addChildNodes(addedChildNodes, startIndex);
  }

  adjustIndent(indent) {
    if (indent !== null) {
      indent = `${DOUBLE_SPACE}${indent}`;
    }

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

  depth() {
    const { depth = null } = this.constructor;

    return depth;
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

    (siblingDOMElement !== null) ?
      insertAfter(this.domElement, parentDOMElement, siblingDOMElement) :
        insertBeforehand(this.domElement, parentDOMElement);

    parentDOMElement = this.domElement; ///

    siblingDOMElement = null;

    this.childNodes.forEach((childNode) => {
      siblingDOMElement = childNode.mount(parentDOMElement, siblingDOMElement, context);
    });

    siblingDOMElement = this.domElement;  ///

    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    {
      const parentDOMElement = this.domElement; ///

      this.childNodes.forEach((childNode) => {
        childNode.unmount(parentDOMElement);
      });
    }

    remove(this.domElement, parentDOMElement);

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

      html = (indent === null) ?
               `${startingTag}${childNodesHTML}${closingTag}` :
                 `${indent}${startingTag}
${childNodesHTML}${indent}${closingTag}
`;
    } else {
      const selfClosingTag = this.selfClosingTag(context);

      html = (indent === null) ?
               `${selfClosingTag}` :
                 `${indent}${selfClosingTag}
`;
    }

    return html;
  }

  asPlainText(context) {
    const childNodesPlainText = this.childNodesAsPlainText(context),
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

  static fromNothing(Class, ...remainingArguments) {
    if (Class === undefined) {
      Class = HTMLNode; ///
    }

    const domElement = null,
          htmlNode = Node.fromNothing(Class, domElement, ...remainingArguments);

    return htmlNode;
  }

  static fromOuterNode(Class, outerNode, ...remainingArguments) {
    if (outerNode === undefined) {
      outerNode = Class;  ///

      Class = HTMLNode; ///
    }

    const domElement = null,
          htmlNode = Node.fromOuterNode(Class, outerNode, domElement, ...remainingArguments);

    return htmlNode;
  }

  static fromDOMElement(Class, domElement, ...remainingArguments) {
    if (domElement === undefined) {
      domElement = Class; ///

      Class = HTMLNode; ///
    }

    const htmlNode = Node.fromNothing(Class, domElement, ...remainingArguments);

    return htmlNode;
  }

  static fromChildHTMLNodes(Class, childHTMLNodes, ...remainingArguments) {
    if (childHTMLNodes === undefined) {
      childHTMLNodes = Class;  ///

      Class = HTMLNode; ///
    }

    const childNodes = childHTMLNodes,  ///
          domElement = null,
          htmlNode = Node.fromChildNodes(Class, childNodes, domElement, ...remainingArguments);

    return htmlNode;
  }
}

Object.assign(HTMLNode.prototype, nodeMixins);

export default HTMLNode;
