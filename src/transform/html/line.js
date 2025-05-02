"use strict";

import HTMLTransform from "../../transform/html"

export default class LineHTMLTransform extends HTMLTransform {
  static fromFootnoteHTMLTransform(footnoteHTNLTransform, context) {
    const linehHTMLNode = footnoteHTNLTransform.getLineHTMLNode(),
          htmlNode = linehHTMLNode, ///
          paragraphHTMLTransform = HTMLTransform.fromHTNLNOde(LineHTMLTransform, htmlNode, context);

    return paragraphHTMLTransform;
  }
}
