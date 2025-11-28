"use strict";

import HTMLNode from "../../html";
import AnchorHTMLNode from "../../../node/html/anchor";

import { FOOTNOTE_PREPEND } from "../../../prepends";

export default class FootnoteAnchorHTMLNode extends AnchorHTMLNode {
  static fromIdentifier(identifier) {
    const prepend = FOOTNOTE_PREPEND,
          footnoteAnchorHTMLNode = HTMLNode.fromNothing(FootnoteAnchorHTMLNode, prepend, identifier);

    return footnoteAnchorHTMLNode;
  }
}