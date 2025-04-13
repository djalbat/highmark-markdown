"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";

export default class EmptyTableCellHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    ///
  }

  unmount(parentDOMElement, context) {
    ///
  }

  asHTML(indent, context) {
    const html = EMPTY_STRING;

    return html;
  }

  asPlainText(context) {
    const plainText = EMPTY_STRING;

    return plainText;
  }

  static fromNothing() { return HTMLNode.fromNothing(EmptyTableCellHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(EmptyTableCellHTMLNode, outerNode); }
}
