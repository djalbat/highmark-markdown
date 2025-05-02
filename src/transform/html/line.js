"use strict";

import HTMLTransform from "../../transform/html"

export default class LineHTMLTransform extends HTMLTransform {
  getLineHTMLNode() {
    const node = this.getNode(),
          lineHTMLNode = node;  ///;

    return lineHTMLNode;
  }

  static fromFootnoteHTMLTransform(footnoteHTNLTransform) {
    const lineHTMLNode = footnoteHTNLTransform.getLineHTMLNode(),
          htmlNode = lineHTMLNode, ///
          paragraphHTMLTransform = HTMLTransform.fromHTNLNOde(LineHTMLTransform, htmlNode);

    return paragraphHTMLTransform;
  }
}
