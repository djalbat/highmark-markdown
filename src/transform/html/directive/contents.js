"use strict";

import HTMLTransform from "../../../transform/html"

export default class ContentsDirectiveHTMLTransform extends HTMLTransform {
  static fromContentsDirectiveHTMLNode(contentsDirectiveHTMLNde) {
    const htmlNode = contentsDirectiveHTMLNde, ///
          contentsDirectiveHTMLTransform = HTMLTransform.fromHTMLNode(ContentsDirectiveHTMLTransform, htmlNode);

    return contentsDirectiveHTMLTransform;
  }
}
