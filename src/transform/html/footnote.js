"use strict";

import HTMLTransform from "../../transform/html"

export default class FootnoteHTMLTransform extends HTMLTransform {
  removeFromDivisionHTMLNode(divisionHTMLNode, context) {
    const parentHTNLNode = divisionHTMLNode; ///

    super.removeFrom(parentHTNLNode, context);
  }

  static fromFootnoteHTMLNode(footnoteHTMLNde, context) {
    const htmlNode = footnoteHTMLNde, ///
          footnoteHTMLTransform = HTMLTransform.fromHTNLNOde(FootnoteHTMLTransform, htmlNode, context);

    return footnoteHTMLTransform;
  }
}
