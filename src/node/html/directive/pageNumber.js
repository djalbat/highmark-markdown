"use strict";

import DirectiveHTMLNode from "../../../node/html/directive";

export default class PageNumberDirectiveHTMLNode extends DirectiveHTMLNode {
  static fromNothing() { return DirectiveHTMLNode.fromNothing(PageNumberDirectiveHTMLNode); }

  static fromOuterNode(outerNode) { return DirectiveHTMLNode.fromOuterNode(PageNumberDirectiveHTMLNode, outerNode); }
}
