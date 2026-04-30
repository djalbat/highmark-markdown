"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";
import { mountElement, unmountElement } from "../../utilities/jsx";

const jsxNameRegularExpression = /^[A-Z]/;

export default class XMLElementHTMLNode extends HTMLNode {
  isJSX(context) {
    const tagName = this.tagName(context),
          tagNameJSXName = jsxNameRegularExpression.test(tagName),
          jsx = tagNameJSXName; ///

    return jsx;
  }

  tagName(context) {
    const markdownNode = this.getMarkdownNode(),
          tagName = markdownNode.tagName(context);

    return tagName;
  }

  properties(context) {
    const markdownNode = this.getMarkdownNode(),
          properties = markdownNode.properties(context);

    return properties;
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
    let domElement = null;

    const jsx = this.isJSX(context);

    if (jsx) {
      const jsxDOMElement = this.createJSXDomElement(context);

      domElement = jsxDOMElement; ///
    } else {
      const tagName = this.tagName(context);

      domElement = document.createElement(tagName);

      const attributeNames = this.attributeNames(context),
            attributeValues = this.attributeValues(context);

      attributeNames.forEach((attributeName, index) => {
        const attributeValue = attributeValues[index];

        domElement.setAttribute(attributeName, attributeValue);
      });
    }

    return domElement;
  }

  createJSXDomElement(context) {
    let jsxDOMElement = null;

    const { JSXElements = [] } = context,
          tagName = this.tagName(context),
          JSXElement = JSXElements.find((JSXElement) => {
            const { defaultProperties = {} } = JSXElement,
                  { name } = defaultProperties,
                  nameTagName = (name === tagName);

            if (nameTagName) {
              return true;
            }
          }) || null;

    if (JSXElement !== null) {
      const properties = this.properties(context),
            jsxElement =

              <JSXElement {...properties} />

            ,
            domElement = jsxElement.getDOMElement();

      jsxDOMElement = domElement; ///
    }

    return jsxDOMElement;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    siblingDOMElement = super.mount(parentDOMElement, siblingDOMElement, context);

    if (this.domElement !== null) {
      mountElement(this.domElement);
    }

    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    if (this.domElement !== null) {
      unmountElement(this.domElement);
    }

    super.unmount(parentDOMElement);
  }

  static fromNothing(Class) { return HTMLNode.fromNothing(Class); }

  static fromOuterNode(Class, outerNode) { return HTMLNode.fromOuterNode(Class, outerNode); }
}
