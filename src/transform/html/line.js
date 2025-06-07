"use strict";

import HTMLTransform from "../../transform/html"

export default class LineHTMLTransform extends HTMLTransform {
  getLineHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          lineHTMLNode = htmlNode;  ///;

    return lineHTMLNode;
  }

  static fromLineHTMLNode(lineHTMLNode) {
    const htmlNode = lineHTMLNode, ///
          paragraphHTMLTransform = HTMLTransform.fromHTMLNode(LineHTMLTransform, htmlNode);

    return paragraphHTMLTransform;
  }
}
