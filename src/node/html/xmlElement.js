"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";
import { findJSXElement, mountJSXElement, unmountJSXElement, isTagNameJSXTagName } from "../../utilities/jsx";

export default class XMLElementHTMLNode extends HTMLNode {
  isJSX(context) {
    const tagName = this.tagName(context),
          tagNameJSXTagname = isTagNameJSXTagName(tagName),
          jsx = tagNameJSXTagname; ///

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
    let domElement;

    const jsxDOMElement = this.createJSXDOMElement(context);

    if (jsxDOMElement !== null) {
      domElement = jsxDOMElement; ///
    } else {
      const nativeDOMElement = this.createNativeDOMElement(context);

      domElement = nativeDOMElement;  ///
    }

    return domElement;
  }

  createJSXDOMElement(context) {
    let jsxDOMElement = null;

    const jsx = this.isJSX(context);

    if (jsx) {
      const tagName = this.tagName(context),
            JSXElement = findJSXElement(tagName, context);

      if (JSXElement !== null) {
        const properties = this.properties(context),
              jsxElement =

                <JSXElement {...properties} />

              ,
              domElement = jsxElement.getDOMElement();

        jsxDOMElement = domElement; ///
      }
    }

    return jsxDOMElement;
  }

  createNativeDOMElement(context) {
    let nativeDOMElement;

    const tagName = this.tagName(context);

    nativeDOMElement = document.createElement(tagName);

    const attributeNames = this.attributeNames(context),
          attributeValues = this.attributeValues(context);

    attributeNames.forEach((attributeName, index) => {
      const attributeValue = attributeValues[index];

      nativeDOMElement.setAttribute(attributeName, attributeValue);
    });

    return nativeDOMElement;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    siblingDOMElement = super.mount(parentDOMElement, siblingDOMElement, context);

    const jsxElement = this.domElement.__element__;  ///

    if (jsxElement) { ///
      mountJSXElement(jsxElement);
    }

    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    const jsxElement = this.domElement.__element__;  ///

    if (jsxElement) { ///
      unmountJSXElement(jsxElement);
    }

    super.unmount(parentDOMElement);
  }

  static fromNothing(Class) { return HTMLNode.fromNothing(Class); }

  static fromOuterNode(Class, outerNode) { return HTMLNode.fromOuterNode(Class, outerNode); }
}
