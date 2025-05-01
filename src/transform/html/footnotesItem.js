"use strict";

import HTMLTransform from "../../transform/html"
import FootnoteItemHTMLNode from "../../node/html/item/footnote";

export default class FootnotesItemHTMLTransform extends HTMLTransform {
  getFootnoteItemHTMLNode() {
    const node = this.getNode(),
          footnoteItemHTMLNode = node; ///

    return footnoteItemHTMLNode;
  }

  static fromParagraphHTMLTransformAndIdentifier(paragraphHTMLTransform, identifier, context) {
    const footnoteItemHTMLNode = FootnoteItemHTMLNode.fromFootnotesHTMLTransformAndIdentifier(footnoteHTMLTransform, identifier),
          ascendantNode = footnoteItemHTMLNode, ///
          footnotesItemTransform = footnoteHTMLTransform.expand(FootnotesItemHTMLTransform, ascendantNode);

    return footnotesItemTransform;
  }
}
