"use strict";

export default class HTMLTransform {
  constructor(node) {
    this.node = node;
  }

  getNode() {
    return this.node;
  }

  addAfter(exitingHTMLNode) {
    const childNode = exitingHTMLNode,  ///
          parentNode = childNode.getParentNode(),
          index = parentNode.indexOfChildNode(childNode),
          startIndex = index + 1,
          addedChildNode = this.node;  ///

    parentNode.addChildNode(addedChildNode, startIndex);
  }

  appendTo(parentHTMLNode) {
    const childNode = this.node, ///
          parentNode = parentHTMLNode;  ///

    parentNode.appendChildNode(childNode);
  }

  remove() {
    const childNode = this.node, ///
          parentNode = childNode.getParentNode();

    parentNode.removeChildNode(childNode);
  }

  expand(Class, ascendantNode) {
    if (ascendantNode === undefined) {
      ascendantNode = Class;  ///

      Class = HTMLTransform;  ///
    }

    const node = ascendantNode, ///
          transform = new Class(node);

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

      Class = HTMLTransform;  ///
    }

    const node = htmlNode,  ///
          htmlTransform = new Class(node);

    return htmlTransform;
  }
}
