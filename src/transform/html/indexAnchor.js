"use strict";

import HTMLTransform from "../../transform/html"
import AnchorHTMLNode from "../../node/html/anchor";

import { INDEX_PREPEND } from "../../prepends";

export default class IndexAnchorTMLTransform extends HTMLTransform {
  appendToHTMLNode(htmlNode) {
    const parentHTMLNode = htmlNode;  ///

    this.appendTo(parentHTMLNode);
  }

  static fromPageNumber(pageNumber) {
    const prepend = INDEX_PREPEND,
          identifier = pageNumber,  ///
          anchorHTMLNode = AnchorHTMLNode.fromPrependAndIdentifier(prepend, identifier),
          htmlNode = anchorHTMLNode, ///
          paragraphHTMLTransform = HTMLTransform.fromHTMLNode(IndexAnchorTMLTransform, htmlNode);

    return paragraphHTMLTransform;
  }
}
