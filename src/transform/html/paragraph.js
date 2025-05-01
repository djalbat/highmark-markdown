"use strict";

import HTMLTransform from "../../transform/html"

export default class ParagraphHTMLTransform extends HTMLTransform {
  static fromFootnoteHTMLTransform(footnoteHTNLTransform, context) {
    const paragraphHTMLNode = footnoteHTNLTransform.getParagraphHTMLNode(),
          htmlNode = paragraphHTMLNode, ///
          paragraphHTMLTransform = HTMLTransform.fromHTNLNOde(ParagraphHTMLTransform, htmlNode, context);

    return paragraphHTMLTransform;
  }
}
