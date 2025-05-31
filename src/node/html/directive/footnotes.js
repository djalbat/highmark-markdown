"use strict";

import DirectiveHTMLNode from "../../../node/html/directive";

export default class FootnotesDirectiveHTMLNode extends DirectiveHTMLNode {
  static fromNothing() { return DirectiveHTMLNode.fromNothing(FootnotesDirectiveHTMLNode); }

  static fromOuterNode(outerNode) { return DirectiveHTMLNode.fromOuterNode(FootnotesDirectiveHTMLNode, outerNode); }
}
