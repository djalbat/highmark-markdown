"use strict";

import TextHTMLNode from "../../html/text";

export default class BlockTextHTMLNode extends TextHTMLNode {
  static tagName = null;

  static className = null;

  static fromNothing() { return TextHTMLNode.fromNothing(BlockTextHTMLNode); }

  static fromOuterNode(outerNode) { return TextHTMLNode.fromOuterNode(BlockTextHTMLNode, outerNode); }
}
