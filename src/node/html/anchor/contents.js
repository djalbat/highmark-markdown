"use strict";

import HTMLNode from "../../html";
import AnchorHTMLNode from "../../../node/html/anchor";

import { CONTENTS_PREPEND } from "../../../prepends";

export default class ContentsAnchorHTMLNode extends AnchorHTMLNode {
  static fromIdentifier(identifier) {
    const prepend = CONTENTS_PREPEND,
          contentsAnchorHTMLNode = HTMLNode.fromNothing(ContentsAnchorHTMLNode, prepend, identifier);

    return contentsAnchorHTMLNode;
  }
}