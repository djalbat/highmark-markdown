"use strict";

import { arrayUtilities } from "necessary";

import HTMLNode from "../../node/html";
import PlainTextHTMLNode from "./plainText";

import { EMPTY_STRING } from "../../constants";
import { contentFromPlainTextHTMLNodes } from "../../utilities/plainText";

const { clear } = arrayUtilities;

export default class LineHTMLNode extends HTMLNode {
  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const content = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = (indent !== null) ?
                  `${indent}${startingTag}${content}${closingTag}
`:                   `${startingTag}${content}${closingTag}`;

    return html;
  }

  childNodesAsHTML(indent, context) {
    let html;

    const htmls = [],
          htmlNode = this,  ///
          plainTextHTMLNodes = [];

    this.forEachChildNode((childNode) => {
      const childNodePlainTextHTMLNode = (childNode instanceof PlainTextHTMLNode);

      if (childNodePlainTextHTMLNode) {
        const plainTextHTMLNode = childNode;  ///

        plainTextHTMLNodes.push(plainTextHTMLNode);
      } else {
        const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, htmlNode, context);

        clear(plainTextHTMLNodes);

        if (content !== null) {
          const html = content; ///

          htmls.push(html);
        }

        const indent = null,
              html = childNode.asHTML(indent, context);

        if (html !== null) {
          htmls.push(html);
        }
      }
    });

    const content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, htmlNode, context);

    clear(plainTextHTMLNodes);

    if (content !== null) {
      const html = content; ///

      htmls.push(html);
    }

    html = htmls.join(EMPTY_STRING);

    return html;
  }

  static fromNothing() { return HTMLNode.fromNothing(LineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(LineHTMLNode, outerNode); }
}
