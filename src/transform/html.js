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

  addAfter(exitingHTMLNode) {
    const childNode = exitingHTMLNode,  ///
          parentNode = childNode.getParentNode(),
          index = parentNode.indexOfChildNode(childNode),
          startIndex = index + 1,
          addedChildNode = this.htmlNode;  ///

    parentNode.addChildNode(addedChildNode, startIndex);
  }

  replace(replacedHTMLNode) {
    const parentNode = replacedHTMLNode.getParentNode(),
          replacedChildNode = replacedHTMLNode, ///
          replacementChildNode = this.htmlNode,  ///
          replacementChildNodes = [
            replacementChildNode
          ];

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
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

  static fromHTMLNode(Class, htmlNode, ...remainingArguments) {
    if (htmlNode === undefined) {
      htmlNode = Class; ///

      Class = HTMLTransform;  ///
    }

    const htmlTransform = new Class(htmlNode, ...remainingArguments);

    return htmlTransform;
  }
}
