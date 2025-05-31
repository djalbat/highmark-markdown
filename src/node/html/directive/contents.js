"use strict";

import DirectiveHTMLNode from "../../../node/html/directive";

export default class ContentsDirectiveHTMLNode extends DirectiveHTMLNode {
  static fromNothing() { return DirectiveHTMLNode.fromNothing(ContentsDirectiveHTMLNode); }

  static fromOuterNode(outerNode) { return DirectiveHTMLNode.fromOuterNode(ContentsDirectiveHTMLNode, outerNode); }
}
