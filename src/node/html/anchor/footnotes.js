"use strict";

import HTMLNode from "../../html";
import AnchorHTMLNode from "../../../node/html/anchor";

import { FOOTNOTES_PREPEND } from "../../../prepends";

export default class FootnotesAnchorHTMLNode extends AnchorHTMLNode {
  static fromIdentifier(identifier) {
    const prepend = FOOTNOTES_PREPEND,
          footnotesAnchorHTMLNode = HTMLNode.fromNothing(FootnotesAnchorHTMLNode, prepend, identifier);

    return footnotesAnchorHTMLNode;
  }
}