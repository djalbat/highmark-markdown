"use strict";

import TextHTMLNode from "../../html/text";

export default class PlainTextHTMLNode extends TextHTMLNode {
  static tagName = null;

  static className = null;

  static fromNothing() { return TextHTMLNode.fromNothing(PlainTextHTMLNode); }

  static fromOuterNode(outerNode) { return TextHTMLNode.fromOuterNode(PlainTextHTMLNode, outerNode); }
}
