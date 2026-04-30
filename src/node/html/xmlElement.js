"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";

export default class XMLElementHTMLNode extends HTMLNode {
  tagName(context) {
    const markdownNode = this.getMarkdownNode(),
          tagName = markdownNode.tagName(context);

    return tagName;
  }

  attributeNames(context) {
    const markdownNode = this.getMarkdownNode(),
          attributeNames = markdownNode.attributeNames(context);

    return attributeNames;
  }

  attributeValues(context) {
    const markdownNode = this.getMarkdownNode(),
          attributeValues = markdownNode.attributeValues(context);

    return attributeValues;
  }

  startingTag(context) {
    let startingTag = EMPTY_STRING;

    const tagName = this.tagName(context);

    startingTag = `${startingTag}<${tagName}`;

    const attributeNames = this.attributeNames(context),
          attributeValues = this.attributeValues(context);

    attributeNames.forEach((attributeName, index) => {
      const attributeValue = attributeValues[index];

      startingTag = `${startingTag} ${attributeName}="${attributeValue}"`;
    });

    startingTag = `${startingTag}/>`;

    return startingTag;
  }

  closingTag(context) {
    const tagName = this.tagName(context),
          closingTag = `</${tagName}>`;

    return closingTag;
  }

  selfClosingTag(context) {
    let selfClosingTag = EMPTY_STRING;

    const tagName = this.tagName(context);

    selfClosingTag = `${selfClosingTag}<${tagName}`;

    const attributeNames = this.attributeNames(context),
          attributeValues = this.attributeValues(context);

    attributeNames.forEach((attributeName, index) => {
      const attributeValue = attributeValues[index];

      selfClosingTag = `${selfClosingTag} ${attributeName}="${attributeValue}"`;

    });

    selfClosingTag = `${selfClosingTag}/>`;

    return selfClosingTag;
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

  static fromNothing(Class) { return HTMLNode.fromNothing(Class); }

  static fromOuterNode(Class, outerNode) { return HTMLNode.fromOuterNode(Class, outerNode); }
}
