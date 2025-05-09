"use strict";

import HTMLTransform from "../../../transform/html";
import IndexHeadingHTMLNode from "../../../node/html/heading/index";

export default class IndexHeadingHTMLTransform extends HTMLTransform {
  static fromLetter(letter) {
    const indexHeadingHTMLNode = IndexHeadingHTMLNode.fromLetter(letter),
          htmlNode = indexHeadingHTMLNode,  ///
          indexHeadingHTMLTransform = HTMLTransform.fromHTMLNode(IndexHeadingHTMLTransform, htmlNode);

    return indexHeadingHTMLTransform;
  }
}
