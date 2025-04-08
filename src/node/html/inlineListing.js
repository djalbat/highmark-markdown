"use strict";

import HTMLNode from "../../node/html";

import { replaceEntities } from "../../utilities/html";
import { removeBackticks } from "../../utilities/string";

export default class InlineListingHTMLNode extends HTMLNode {
  createDOMElement(context) {
    let domElement,
        content = this.content(context);

    content = removeBackticks(content); ///

    content = replaceEntities(content); ///

    const textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    let content = this.content(context);

    content = removeBackticks(content); ///

    childNodesHTML = content; ///

    return childNodesHTML;
  }

  static fromNothing() { return HTMLNode.fromNothing(InlineListingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(InlineListingHTMLNode, outerNode); }
}
