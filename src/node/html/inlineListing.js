"use strict";

import HTMLNode from "../../node/html";

import { replaceEntities } from "../../utilities/html";
import { removeBackticks } from "../../utilities/string";

export default class InlineListingHTMLNode extends HTMLNode {
  content(context) {
    let content = super.content(context);

    content = removeBackticks(content); ///

    content = replaceEntities(content); ///

    return content;
  }

  createDOMElement(context) {
    let domElement;

    const content = this.content(context),
          textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    domElement.appendChild(textNode);

    return domElement;
  }

  asHTML(indent, context) {
    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  asPlainText(context) {
    const content = this.content(context),
          plainText = content;  ///

    return plainText; ///
  }

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          html = content; ///

    return html;
  }

  static fromNothing() { return HTMLNode.fromNothing(InlineListingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(InlineListingHTMLNode, outerNode); }
}
