"use strict";

import HTMLNode from "../../node/html";
import elementMap from "../../elementMap";

import { STRONG_TEXT_RULE_NAME } from "../../ruleNames";

const { tagName } = elementMap[STRONG_TEXT_RULE_NAME];

export default class StronglyEmphasisedTextHTMLNode extends HTMLNode {
  asHTML(indent, context) {
    let html = super.asHTML(indent, context);

    const childNodesHTML = html,  ///
          startingTag = `<${tagName}>`,
          closingTag = `</${tagName}>`;

    html = `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  inlineText(context) {
    const inlineText = this.fromSecondChildNode((secondChildNode) => {
      const indent = null,
            inlineTextMarkdownNode = secondChildNode, ///
            inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context),
            inlineText = inlineTextMarkdownNodeHTML;  ///

      return inlineText;
    });

    return inlineText;
  }

  createDOMElement(context) {
    let domElement;

    domElement = document.createElement(tagName);

    const parentDOMElement = domElement,  ///
          childDOMElement = this.createChildDOMElement(context);

    domElement = childDOMElement; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  createChildDOMElement(context) {
    let domElement;

    const inlineText = this.inlineText(context),
          content = inlineText; ///

    const textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  static fromNothing() { return HTMLNode.fromNothing(StronglyEmphasisedTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(StronglyEmphasisedTextHTMLNode, outerNode); }
}
