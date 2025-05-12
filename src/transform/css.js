"use strict";

export default class CSSTransform {
  constructor(cssNode) {
    this.cssNode = cssNode;
  }

  getCSSNode() {
    return this.cssNode;
  }

  appendTo(parentCSSNode) {
    const childNode = this.cssNode, ///
          parentNode = parentCSSNode;  ///

    parentNode.appendChildNode(childNode);
  }

  mergeWith(cssNode) {
    const parentNode = cssNode; ///

    cssNode = this.cssNode.clone();

    const node = cssNode, ///
          childNodes = node.getChildNodes();

    parentNode.appendChildNodes(childNodes);
  }

  remove() {
    const childNode = this.cssNode, ///
          parentNode = childNode.getParentNode();

    parentNode.removeChildNode(childNode);
  }

  static fromCSSNode(Class, cssNode, ...remainingArguments) {
    if (cssNode === undefined) {
      cssNode = Class; ///

      Class = CSSTransform;  ///
    }

    const cssTransform = new Class(cssNode, ...remainingArguments);

    return cssTransform;
  }
}
