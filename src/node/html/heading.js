"use strict";

import HTMLNode from "../../node/html";

export default class HeadingHTMLNode extends HTMLNode {
  static fromNothing(Class) { return HTMLNode.fromNothing(Class); }

  static fromOuterNode(Class, outerNode) { return HTMLNode.fromOuterNode(Class, outerNode); }
}
