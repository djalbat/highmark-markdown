"use strict";

import HTMLNode from "../../../node/html";
import AnchorHTMLNode from "../../../node/html/anchor";

import { FOOTNOTE_PREPEND } from "../../../prepends";
import { FOOTNOTE_ITEM_MARKDOWN_RULE_NAME } from "../../../ruleNames/markdown";

export default class FootnoteItemHTMLNode extends HTMLNode {
  getRuleName() {
    const ruleName = FOOTNOTE_ITEM_MARKDOWN_RULE_NAME; ///

    return ruleName;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "li";

  static className = "footnote";

  static fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier) {
    const prepend = FOOTNOTE_PREPEND,
          anchorHTMLNode = AnchorHTMLNode.fromPrependAndIdentifier(prepend, identifier),
          lineHTMLNode = lineHTMLTransform.getLineHTMLNode(),
          childHTMLNodes = [
            anchorHTMLNode,
            lineHTMLNode
          ],
          footnoteItemHTMLNode = HTMLNode.fromChildHTMLNodes(FootnoteItemHTMLNode, childHTMLNodes);

    return footnoteItemHTMLNode;
  }
}
