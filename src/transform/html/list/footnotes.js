"use strict";

import HTMLTransform from "../../../transform/html";
import FootnotesListHTMLNode from "../../../node/html/list/footnotes";

export default class FootnotesListHTMLTransform extends HTMLTransform {
  getFootnotesListHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          footnotesListHTMLNode = htmlNode; ///

    return footnotesListHTMLNode;
  }

  appendToDivisionHTMLNode(divisionHTMLNode) {
    const parentHTMLNode = divisionHTMLNode;  ///

    this.appendTo(parentHTMLNode);
  }

  static fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms) {
    let footnotesListHTMLTransform = null;

    const footnoteItemHTMLTransformsLength = footnoteItemHTMLTransforms.length;

    if (footnoteItemHTMLTransformsLength > 0) {
      const footnotesListHTMLNode = FootnotesListHTMLNode.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms),
            htmlNode = footnotesListHTMLNode; ///

      footnotesListHTMLTransform = HTMLTransform.fromHTMLNode(FootnotesListHTMLTransform, htmlNode);
    }

    return footnotesListHTMLTransform;
  }
}
