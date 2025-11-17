"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";
import {remove, insertAfter, insertBeforehand } from "../../utilities/dom";
import { ALT_ATTRIBUTE_NAME, SRC_ATTRIBUTE_NAME } from "../../attributeNames";

export default class ImageHTMLNode extends HTMLNode {
  src(context) {
    const markdownNode = this.getMarkdownNode(),
          src = markdownNode.src(context);

    return src;
  }

  alt(context) {
    const alt = this.fromFirstChildNode((firstChildNode) => {
      const inlineTextHTMLNode = firstChildNode,  ///
            plainText = inlineTextHTMLNode.asPlainText(context),
            alt = plainText;  ///

      return alt;
    });

    return alt;
  }

  selfClosingTag(context) {
    const tagName = this.tagName(context),
          attributeNames = this.attributeNames(context),
          attributeValues = this.attributeValues(context),
          attributesHTML = attributeNames.reduce((attributesHML, attributeName, index) => {
            const attributeValue = attributeValues[index];

            attributesHML = (attributesHML === null) ?
                              `${attributeName}="${attributeValue}"` :
                                `${attributesHML} ${attributeName}="${attributeValue}"`;

            return attributesHML;

          }, null),
          selfClosingTag = `<${tagName} ${attributesHTML}/>`;

    return selfClosingTag;
  }

  attributeNames(context) {
    const attributeNames = [
      ALT_ATTRIBUTE_NAME,
      SRC_ATTRIBUTE_NAME
    ];

    return attributeNames;
  }

  attributeValues(context) {
    const alt = this.alt(context),
          src = this.src(context),
          attributeValues = [
            alt,
            src
          ];

    return attributeValues;
  }

  adjustIndent(indent) {
    indent = null;

    return indent;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    const domElement = this.createDOMElement(context);

    this.setDOMElement(domElement);

    (siblingDOMElement !== null) ?
      insertAfter(domElement, parentDOMElement, siblingDOMElement) :
        insertBeforehand(domElement, parentDOMElement);

    siblingDOMElement = domElement; ///

    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    const domElement = this.getDOMElement();

    remove(domElement, parentDOMElement);

    this.resetDOMElement();
  }

  createDOMElement(context) {
    let domElement;

    const tagName = this.tagName(context);

    domElement = document.createElement(tagName);

    const attributeNames = this.attributeNames(context),
          attributeValues = this.attributeValues(context);

    attributeNames.forEach((attributeName, index) => {
      const attributeValue = attributeValues[index];

      domElement.setAttribute(attributeName, attributeValue);
    });

    return domElement;
  }

  childNodesAsHTML(indent, context) {
    const childNodesHTML = EMPTY_STRING;

    return childNodesHTML;
  }

  static tagName = "img";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(ImageHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ImageHTMLNode, outerNode); }
}
