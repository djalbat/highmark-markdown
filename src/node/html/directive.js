"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";

export default class DirectiveHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
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

  static fromNothing(Class) { return HTMLNode.fromNothing(Class); }

  static fromOuterNode(Class, outerNode) { return HTMLNode.fromOuterNode(Class, outerNode); }
}
