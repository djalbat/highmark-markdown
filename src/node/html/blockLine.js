"use strict";

import HTMLNode from "../../node/html";
import {replaceEntities} from "../../utilities/html";

export default class BlockLineHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    this.domElement = this.createDOMElement(context);

    parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
  }

  unmount(parentDOMElement, context) {
    if (this.domElement !== null) {
      parentDOMElement.removeChild(this.domElement);

      this.domElement = null;
    }
  }

  asHTML(indent, context) {
    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createDOMElement(context) {
    let domElement;

    let content = this.content(context);

    content = replaceEntities(content); ///

    const textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context)

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  childNodesAsPlainText(context) {
    const content = this.content(context),
          childNodesPlainText = content;  ///

    return childNodesPlainText;
  }

  static lines = 2;

  static fromNothing() { return HTMLNode.fromNothing(BlockLineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(BlockLineHTMLNode, outerNode); }
}
