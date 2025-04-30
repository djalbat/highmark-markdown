"use strict";

import { Transform } from "occam-dom";

export default class FootnoteHTMLTransform extends Transform {
  removeFromDivisionHTMLNode(divisionHTMLNode, context) {
    const parentNode = divisionHTMLNode;  ///

    super.removeFrom(parentNode, context);
  }

  static fromFootnoteHTMLNode(footnoteHTMLNde, context) {
    const node = footnoteHTMLNde,
          footnoteHTMLTransform = Transform.fromNode(FootnoteHTMLTransform, node, context);

    return footnoteHTMLTransform;
  }
}
