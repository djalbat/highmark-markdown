"use strict";

import HTMLNode from "../../../node/html";
import FootnotesAnchorHTMLNode from "../../../node/html/anchor/footnotes";

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
    const footnotesAnchorHTMLNode = FootnotesAnchorHTMLNode.fromIdentifier(identifier),
          childHTMLNodes = [
            footnotesAnchorHTMLNode,
            paragraphHTMLNode
          ],
          footnoteItemHTMLNode = HTMLNode.fromChildHTMLNodes(FootnoteItemHTMLNode, childHTMLNodes);

    return footnoteItemHTMLNode;
  }
}
