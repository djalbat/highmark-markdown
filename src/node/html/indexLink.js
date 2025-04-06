"use strict";

import HTMLNode from "../../node/html";

import { INDEX_PREPEND } from "../../prepends";
import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

export default class IndexLinkHTMLNode extends HTMLNode {
  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const content = this.content(context),
          attributeValue = `#${INDEX_PREPEND}-${content}`;

    return attributeValue;
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

  static fromNothing() { return HTMLNode.fromNothing(IndexLinkHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(IndexLinkHTMLNode, outerNode); }
}
