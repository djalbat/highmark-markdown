"use strict";

import HTMLTransform from "../../transform/html"
import PageNumberHTMLNode from "../../node/html/pageNumber";

export default class PageNumberTMLTransform extends HTMLTransform {
  appendToDivisionHTMLNode(divisionHTMLNode) {
    const parentHTMLNode = divisionHTMLNode;

    this.appendTo(parentHTMLNode);
  }

  static fromPageNumber(pageNumber) {
    const pageNumberHTMLNode = PageNumberHTMLNode.fromPageNumber(pageNumber),
          htmlNode = pageNumberHTMLNode, ///
          paragraphHTMLTransform = HTMLTransform.fromHTNLNOde(PageNumberTMLTransform, htmlNode);

    return paragraphHTMLTransform;
  }
}
