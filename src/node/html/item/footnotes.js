"use strict";

import HTMLNode from "../../../node/html";

export default class FootnotesListItemNode extends HTMLNode {
  static tagName = "li";

  static className = "footnotes";

  static fromNothing() { return HTMLNode.fromNothing(FootnotesListItemNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(FootnotesListItemNode, outerNode); }
}
