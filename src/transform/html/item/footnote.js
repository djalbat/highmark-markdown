"use strict";

import HTMLTransform from "../../../transform/html"
import FootnoteItemHTMLNode from "../../../node/html/item/footnote";

export default class FootnoteItemHTMLTransform extends HTMLTransform {
  getFootnoteItemHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          footnoteItemHTMLNode = htmlNode; ///

    return footnoteItemHTMLNode;
  }

  static fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier) {
    const footnoteItemHTMLNode = FootnoteItemHTMLNode.fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier),
          ascendantNode = footnoteItemHTMLNode, ///
          footnoteItemTransform = lineHTMLTransform.expand(FootnoteItemHTMLTransform, ascendantNode);

    return footnoteItemTransform;
  }
}
