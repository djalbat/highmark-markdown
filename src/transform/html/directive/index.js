"use strict";

import HTMLTransform from "../../../transform/html"

export default class IndexDirectiveHTMLTransform extends HTMLTransform {
  getIndexDirectiveHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          indexDirectiveHTMLNode = htmlNode; ///

    return indexDirectiveHTMLNode;
  }

  static fromIndexDirectiveHTMLNode(indexDirectiveHTMLNde) {
    const htmlNode = indexDirectiveHTMLNde, ///
          indexDirectiveHTMLTransform = HTMLTransform.fromHTMLNode(IndexDirectiveHTMLTransform, htmlNode);

    return indexDirectiveHTMLTransform;
  }
}
