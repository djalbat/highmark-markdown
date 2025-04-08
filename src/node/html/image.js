"use strict";

import HTMLNode from "../../node/html";

import { ALT_ATTRIBUTE_NAME, SRC_ATTRIBUTE_NAME } from "../../attributeNames";

export default class ImageHTMLNode extends HTMLNode {
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

  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const selfClosingTag = this.selfClosingTag(context),
          html = (indent === null) ?
                   selfClosingTag :  ///
                    `${indent}${selfClosingTag}
`;

    return html;
  }

  createDOMElement(context) {
    const tagName = this.tagName(context),
          domElement = document.createElement(tagName),
          attributeNames = this.attributeNames(context),
          attributeValues = this.attributeValues(context);

    attributeNames.forEach((attributeName, index) => {
      const attributeValue = attributeValues[index];

      domElement.setAttribute(attributeName, attributeValue);
    });

    return domElement;
  }

  static fromNothing() { return HTMLNode.fromNothing(ImageHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ImageHTMLNode, outerNode); }
}
