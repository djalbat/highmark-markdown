"use strict";

import HTMLNode from "../../html";
import AnchorHTMLNode from "../../../node/html/anchor";

import { INDEX_PREPEND } from "../../../prepends";

export default class IndexAnchorHTMLNode extends AnchorHTMLNode {
  static fromIdentifier(identifier) {
    const prepend = INDEX_PREPEND,
          indexAnchorHTMLNode = HTMLNode.fromNothing(IndexAnchorHTMLNode, prepend, identifier);

    return indexAnchorHTMLNode;
  }
}