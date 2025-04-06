"use strict";

import HTMLNode from "../../node/html";

import { htmlFromMarkdownNode } from "../../utilities/line";

export default class LineHTMLNode extends HTMLNode {
  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = (indent !== null) ?
                  `${indent}${startingTag}${childNodesHTML}${closingTag}
`:                   `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  childNodesAsHTML(indent, context) {
    const markdownNode = this,
          html = htmlFromMarkdownNode(markdownNode, context),
          childNodesHTML = html;  ///

    return childNodesHTML;
  }

  static fromNothing() { return HTMLNode.fromNothing(LineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(LineHTMLNode, outerNode); }
}
