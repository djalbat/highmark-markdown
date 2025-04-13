"use strict";

import HHTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";

export default class BlockListingHStartHTMLNode extends HHTMLNode {
  className(context) {
    const className = this.fromFirstChildNode((firstChildNode) => {
      const classNameHTMLNode = firstChildNode, ///
            className = classNameHTMLNode.className(context);  ///

      return className;
    }) || null;

    return className;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    ////
  }

  unmount(parentDOMElement, context) {
    ///
  }

  asHTML(indent, context) {
    const html = EMPTY_STRING;

    return html;
  }

  asPlainText(indent, context) {
    const plainText = EMPTY_STRING;

    return plainText;
  }

  static fromNothing() { return HHTMLNode.fromNothing(BlockListingHStartHTMLNode); }

  static fromOuterNode(outerNode) { return HHTMLNode.fromOuterNode(BlockListingHStartHTMLNode, outerNode); }
}
