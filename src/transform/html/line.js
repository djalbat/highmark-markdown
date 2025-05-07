"use strict";

import HTMLTransform from "../../transform/html"

export default class LineHTMLTransform extends HTMLTransform {
  getLineHTMLNode() {
    const node = this.getNode(),
          lineHTMLNode = node;  ///;

    return lineHTMLNode;
  }

  static fromLineHTMLNode(lineHTMLNode) {
    const htmlNode = lineHTMLNode, ///
          paragraphHTMLTransform = HTMLTransform.fromHTMLNode(LineHTMLTransform, htmlNode);

    return paragraphHTMLTransform;
  }

  static fromFootnoteHTMLTransform(footnoteHTNLTransform) {
    const lineHTMLNode = footnoteHTNLTransform.getLineHTMLNode(),
          htmlNode = lineHTMLNode, ///
          paragraphHTMLTransform = HTMLTransform.fromHTMLNode(LineHTMLTransform, htmlNode);

    return paragraphHTMLTransform;
  }
}
