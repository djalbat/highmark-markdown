"use strict";

import HTMLTransform from "../../../transform/html"

export default class ContentsDirectiveHTMLTransform extends HTMLTransform {
  getContentsDirectiveHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          contentsDirectiveHTMLNode = htmlNode; ///

    return contentsDirectiveHTMLNode;
  }

  static fromContentsDirectiveHTMLNode(contentsDirectiveHTMLNde) {
    const htmlNode = contentsDirectiveHTMLNde, ///
          contentsDirectiveHTMLTransform = HTMLTransform.fromHTMLNode(ContentsDirectiveHTMLTransform, htmlNode);

    return contentsDirectiveHTMLTransform;
  }
}
