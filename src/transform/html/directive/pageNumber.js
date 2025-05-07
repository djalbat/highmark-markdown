"use strict";

import HTMLTransform from "../../../transform/html"

export default class PageNumberDirectiveHTMLTransform extends HTMLTransform {
  static fromPageNumberDirectiveHTMLNode(pageNumberDirectiveHTMLNde) {
    const htmlNode = pageNumberDirectiveHTMLNde, ///
          pageNumberDirectiveHTMLTransform = HTMLTransform.fromHTMLNode(PageNumberDirectiveHTMLTransform, htmlNode);

    return pageNumberDirectiveHTMLTransform;
  }
}
