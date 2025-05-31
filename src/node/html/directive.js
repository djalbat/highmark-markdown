"use strict";

import HTMLNode from "../../node/html";

export default class DirectiveHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    return siblingDOMElement;
  }

  unmount(parentDOMElement, context) {
    ///
  }

  static tagName = null;

  static className = null;

  static fromNothing(Class) { return HTMLNode.fromNothing(Class); }

  static fromOuterNode(Class, outerNode) { return HTMLNode.fromOuterNode(Class, outerNode); }
}
