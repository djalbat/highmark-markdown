"use strict";

import HTMLTransform from "../../../transform/html"
import IndexAnchorHTMLNode from "../../../node/html/anchor/index";

export default class IndexAnchorTMLTransform extends HTMLTransform {
  appendToTopmostHTMLNode(topmostHTMLNode) {
    const htmlNode = this.getHTMLNode(),
          childNode = htmlNode, ///
          parentNode = topmostHTMLNode; ///

    parentNode.appendChildNode(childNode);
  }

  static fromPageNumber(pageNumber) {
    const identifier = pageNumber,  ///
          indexAnchorHTMLNode = IndexAnchorHTMLNode.fromIdentifier(identifier),
          htmlNode = indexAnchorHTMLNode, ///
          indexAnchorHTMLTransform = HTMLTransform.fromHTMLNode(IndexAnchorTMLTransform, htmlNode);

    return indexAnchorHTMLTransform;
  }
}
