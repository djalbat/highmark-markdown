"use strict";

export default class HTMLTransform {
  constructor(htmlNode) {
    this.htmlNode = htmlNode;
  }

  getHTMLNode() {
    return this.htmlNode;
  }

  appendTo(parentHTMLNode) {
    const childNode = this.htmlNode, ///
          parentNode = parentHTMLNode;  ///

    parentNode.appendChildNode(childNode);
  }

  prependTo(parentHTMLNode) {
    const childNode = this.htmlNode, ///
        parentNode = parentHTMLNode;  ///

    parentNode.prependChildNode(childNode);
  }

  addAfter(siblingHTMLNode) {
    const childNode = siblingHTMLNode,  ///
          parentNode = childNode.getParentNode(),
          index = parentNode.indexOfChildNode(childNode),
          startIndex = index + 1,
          addedChildNode = this.htmlNode;  ///

    parentNode.addChildNode(addedChildNode, startIndex);
  }

  remove() {
    const childNode = this.htmlNode, ///
          parentNode = childNode.getParentNode();

    parentNode.removeChildNode(childNode);
  }

  static fromHTMLNode(Class, htmlNode, ...remainingArguments) {
    if (htmlNode === undefined) {
      htmlNode = Class; ///

      Class = HTMLTransform;  ///
    }

    const htmlTransform = new Class(htmlNode, ...remainingArguments);

    return htmlTransform;
  }
}
