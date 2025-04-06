"use strict";

import HTMLNode from "../../node/html";

import { ID_ATTRIBUTE_NAME } from "../../attributeNames";

export default class AnchorHTMLNode extends HTMLNode {
  content(context) { return this.outerNode.content(context); }

  attributeName(context) {
    const attributeName = ID_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = `${this.prepend}-${this.identifier}`;

    return attributeValue;
  }

  asHTML(indent, context) {
    if (context === undefined) {
      context = indent; ///

      indent = null;
    }

    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = (indent === null) ?
                   `${startingTag}${childNodesHTML}${closingTag}` :
                     `${indent}${startingTag}
  ${childNodesHTML}${indent}${closingTag}
  `;

    return html;
  }

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  static fromNothing() { return HTMLNode.fromNothing(AnchorHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(AnchorHTMLNode, outerNode); }
}
