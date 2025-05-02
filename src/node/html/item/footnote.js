"use strict";

import HTMLNode from "../../../node/html";
import AnchorHTMLNode from "../../../node/html/anchor";

import { FOOTNOTE_ITEM_RULE_NAME } from "../../../ruleNames";

export default class FootnoteItemHTMLNode extends HTMLNode {
  asString() {
    const string = FOOTNOTE_ITEM_RULE_NAME; ///

    return string;
  }

  static tagName = "li";

  static className = "footnote";

  static fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier) {
    const anchorHTMLNode = AnchorHTMLNode.fromIdentifier(identifier),
          lineHTMLNode = lineHTMLTransform.getLineHTMLNode(),
          childNodes = [
            anchorHTMLNode,
            lineHTMLNode
          ],
          footnoteItemHTMLNode = HTMLNode.fromChildNodes(FootnoteItemHTMLNode, childNodes);

    return footnoteItemHTMLNode;
  }
}
