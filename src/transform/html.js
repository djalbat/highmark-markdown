"use strict";

import { Transform } from "occam-dom";

export default class HTMLTransform extends Transform {
  constructor(node, tokens, htmlNode) {
    super(node, tokens);

    this.htmlNode = htmlNode;
  }

  getHTMLNode() {
    return this.htmlNode;
  }

  removeFrom(parentHTNLNode, context) {
    const childNode = this.htmlNode;  ///

    parentHTNLNode.removeChildNode(childNode);
  }

  static fromHTNLNOde(Class, htmlNode, context) {
    const outerNode = htmlNode.getOuterNode(),
          node = outerNode, ///
          footnoteHTMLTransform = Transform.fromNode(Class, node, htmlNode, context);

    return footnoteHTMLTransform;
  }
}
