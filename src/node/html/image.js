"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";
import { ALT_ATTRIBUTE_NAME, SRC_ATTRIBUTE_NAME } from "../../attributeNames";
import {IMAGE_RULE_NAME} from "../../ruleNames";

export default class ImageHTMLNode extends HTMLNode {
  src(context) { return this.outerNode.src(context); }

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

  mount(parentDOMElement, siblingDOMElement, context) {
    this.domElement = this.createDOMElement(context);

    parentDOMElement.insertBefore(this.domElement, siblingDOMElement)
  }

  unmount(parentDOMElement, context) {
    parentDOMElement.removeChild(this.domElement);

    this.domElement = null;
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

  static fromNothing() { return HTMLNode.fromNothing(ImageHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ImageHTMLNode, outerNode); }
}
