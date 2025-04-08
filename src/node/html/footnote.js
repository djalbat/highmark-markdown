"use strict";

import HTMLNode from "../../node/html";

export default class FootnoteHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    ///
  }

  unmount(parentDOMElement, context) {
    ///
  }

  static fromNothing() { return HTMLNode.fromNothing(FootnoteHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(FootnoteHTMLNode, outerNode); }
}
