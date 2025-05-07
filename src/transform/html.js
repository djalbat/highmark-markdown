"use strict";

export default class HTMLTransform {
  constructor(htmlNode) {
    this.htmlNode = htmlNode;
  }

  getHTMLNode() {
    return this.htmlNode;
  }

  addAfter(exitingHTMLNode) {
    const childNode = exitingHTMLNode,  ///
          parentNode = childNode.getParentNode(),
          index = parentNode.indexOfChildNode(childNode),
          startIndex = index + 1,
          addedChildNode = this.htmlNode;  ///

    parentNode.addChildNode(addedChildNode, startIndex);
  }

  appendTo(parentHTMLNode) {
    const childNode = this.htmlNode, ///
          parentNode = parentHTMLNode;  ///

    parentNode.appendChildNode(childNode);
  }

  remove() {
    const childNode = this.htmlNode, ///
          parentNode = childNode.getParentNode();

    parentNode.removeChildNode(childNode);
  }

  expand(Class, ascendantNode) {
    if (ascendantNode === undefined) {
      ascendantNode = Class;  ///

      Class = HTMLTransform;  ///
    }

    const htmlNode = ascendantNode, ///
          transform = new Class(htmlNode);

    return transform;
  }

  // contract(Class, descendentNode, ...remainingArguments) {
  //   if (descendentNode === undefined) {
  //     descendentNode = Class; ///
  //
  //     Class = Transform;  ///
  //   }
  //
  //   const htmlNode = descendentNode,  ///
  //     tokens = this.tokens, ///
  //     context = { ///
  //       tokens
  //     },
  //     transform = Class.fromNode(htmlNode, ...remainingArguments, context);
  //
  //   return transform;
  // }

  static fromHTMLNode(Class, htmlNode) {
    if (htmlNode === undefined) {
      htmlNode = Class; ///

      Class = HTMLTransform;  ///
    }

    const htmlTransform = new Class(htmlNode);

    return htmlTransform;
  }
}
