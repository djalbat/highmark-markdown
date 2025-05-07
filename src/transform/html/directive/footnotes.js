"use strict";

import HTMLTransform from "../../../transform/html"

export default class FootnotesDirectiveHTMLTransform extends HTMLTransform {
  static fromFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNde) {
    const htmlNode = footnotesDirectiveHTMLNde, ///
          footnotesDirectiveHTMLTransform = HTMLTransform.fromHTMLNode(FootnotesDirectiveHTMLTransform, htmlNode);

    return footnotesDirectiveHTMLTransform;
  }
}
