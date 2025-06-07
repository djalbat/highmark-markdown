"use strict";

import HTMLTransform from "../../../transform/html"
import FootnoteItemHTMLNode from "../../../node/html/item/footnote";

export default class FootnoteItemHTMLTransform extends HTMLTransform {
  getFootnoteItemHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          footnoteItemHTMLNode = htmlNode; ///

    return footnoteItemHTMLNode;
  }

  static fromParagraphHTMLNOdeAndIdentifier(paragraphHTMLNode, identifier) {
    const footnoteItemHTMLNode = FootnoteItemHTMLNode.fromParagraphTMLNodeAndIdentifier(paragraphHTMLNode, identifier),
          htmlNode = footnoteItemHTMLNode, ///
          footnoteItemTransform = HTMLTransform.fromHTMLNode(FootnoteItemHTMLTransform, htmlNode);

    return footnoteItemTransform;
  }
}
