"use strict";

import HTMLTransform from "../../../transform/html";
import FootnotesListHTMLNode from "../../../node/html/list/footnotes";

export default class FootnotesListHTMLTransform extends HTMLTransform {
  appendToDivisionHTMLNode(divisionHTMLNode) {
    const parentHTMLNode = divisionHTMLNode;  ///

    this.appendTo(parentHTMLNode);
  }

  removeFromDivisionHTMLNode(divisionHTMLNode) {
    this.remove();
  }

  static fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms) {
    const footnotesListHTMLNode = FootnotesListHTMLNode.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms),
          htmlNode = footnotesListHTMLNode, ///
          footnotesListHTMLTransform = HTMLTransform.fromHTMLNode(FootnotesListHTMLTransform, htmlNode);

    return footnotesListHTMLTransform;
  }
}
