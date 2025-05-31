"use strict";

import DirectiveHTMLNode from "../../../node/html/directive";

export default class IndexDirectiveHTMLNode extends DirectiveHTMLNode {
  static fromNothing() { return DirectiveHTMLNode.fromNothing(IndexDirectiveHTMLNode); }

  static fromOuterNode(outerNode) { return DirectiveHTMLNode.fromOuterNode(IndexDirectiveHTMLNode, outerNode); }
}
