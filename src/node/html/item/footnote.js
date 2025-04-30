"use strict";

import HTMLNode from "../../../node/html";
import AnchorHTMLNode from "../../../node/html/anchor";

export default class FootnoteItemHTMLNode extends HTMLNode {
  static tagName = "li";

  static className = "footnote";

  static fromFootnotesHTMLTransformAndIdentifier(footnoteHTMLTransform, identifier) {
    const anchorHTMLNode = AnchorHTMLNode.fromIdentifier(identifier),
          paragraphHTMLNode = footnoteHTMLTransform.getParagraphHTMLNode(),
          childNodes = [
            anchorHTMLNode,
            paragraphHTMLNode
          ],
          footnotesItemHTMLNode = HTMLNode.fromChildNodes(FootnoteItemHTMLNode, childNodes);

    return footnotesItemHTMLNode;
  }
}
