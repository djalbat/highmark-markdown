"use strict";

import HHTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";

export default class BlockListingHEndHTMLNode extends HHTMLNode {
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

  static lines = 2;

  static fromNothing() { return HHTMLNode.fromNothing(BlockListingHEndHTMLNode); }

  static fromOuterNode(outerNode) { return HHTMLNode.fromOuterNode(BlockListingHEndHTMLNode, outerNode); }
}
