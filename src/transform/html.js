"use strict";

import { Transform } from "occam-dom";

export default class HTMLTransform extends Transform {
  remove(context) {
    const node = this.getNode(),
          childNode = node, ///
          parentNode = node.getParentNode();

    parentNode.removeChildNode(childNode);
  }

  static fromHTNLNOde(Class, htmlNode, context) {
    const node = htmlNode,  ///
          tokens = null,
          htmlTransform = Transform.fromNodeAndTokens(Class, node, tokens);

    return htmlTransform;
  }
}
