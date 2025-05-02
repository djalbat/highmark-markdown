"use strict";

import { Transform } from "occam-dom";

export default class HTMLTransform extends Transform {
  appendTo(parentHTMLNode) {
    const node = this.getNode(),
          childNode = node, ///
          parentNode = parentHTMLNode;  ///

    parentNode.appendChildNode(childNode);
  }

  remove() {
    const node = this.getNode(),
          childNode = node, ///
          parentNode = node.getParentNode();

    parentNode.removeChildNode(childNode);
  }

  expand(Class, ascendantNode) {
    if (ascendantNode === undefined) {
      ascendantNode = Class;  ///

      Class = Transform;  ///
    }

    const node = ascendantNode, ///
          tokens = null,
          transform = Transform.fromNodeAndTokens(Class, node, tokens);

    return transform;
  }

  // contract(Class, descendentNode, ...remainingArguments) {
  //   if (descendentNode === undefined) {
  //     descendentNode = Class; ///
  //
  //     Class = Transform;  ///
  //   }
  //
  //   const node = descendentNode,  ///
  //     tokens = this.tokens, ///
  //     context = { ///
  //       tokens
  //     },
  //     transform = Class.fromNode(node, ...remainingArguments, context);
  //
  //   return transform;
  // }

  static fromHTNLNOde(Class, htmlNode) {
    if (htmlNode === undefined) {
      htmlNode = Class; ///

      Class = Transform;  ///
    }

    const node = htmlNode,  ///
          tokens = null,
          htmlTransform = Transform.fromNodeAndTokens(Class, node, tokens);

    return htmlTransform;
  }
}
