"use strict";

import HTMLNode from "../../../node/html";
import FootnoteAnchorHTMLNode from "../anchor/footnote";

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

  static fromParagraphTMLNodeAndIdentifier(paragraphHTMLNode, identifier) {
    const footnoteAnchorHTMLNode = FootnoteAnchorHTMLNode.fromIdentifier(identifier),
          childHTMLNodes = [
            footnoteAnchorHTMLNode,
            paragraphHTMLNode
          ],
          footnoteItemHTMLNode = HTMLNode.fromChildHTMLNodes(FootnoteItemHTMLNode, childHTMLNodes);

    return footnoteItemHTMLNode;
  }
}
