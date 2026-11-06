"use strict";

export default class CSSTransform {
  constructor(cssNode) {
    this.cssNode = cssNode;
  }

  getCSSNode() {
    return this.cssNode;
  }

  appendTo(parentCSSNode) {
    const parentNode = parentCSSNode,  ///
          childNode = this.cssNode; ///

    parentNode.appendChildNode(childNode);
  }

  prependTo(parentCSSNode) {
    const parentNode = parentCSSNode,  ///
          childNode = this.cssNode; ///

    parentNode.prependChildNode(childNode);
  }

  mergedWith(Class, cssNode) {
    let parentNode;

    cssNode = cssNode.clone();  ///

    parentNode = cssNode; ///

    const removedChildCSSNodes = parentNode.removeChildNodes();

    cssNode = this.cssNode.clone();  ///

    parentNode = cssNode; ///

    const appendedChildNodes = removedChildCSSNodes;  ///

    parentNode.appendChildNodes(appendedChildNodes);

    const cssTransform = new Class(cssNode);

    return cssTransform;
  }

  remove() {
    const parentCSSNode = this.cssNode.getParentCSSNode(),
          parentNode = parentCSSNode, ///
          childNode = this.cssNode; ///

    parentNode.removeChildNode(childNode);
  }

  clone(Class) {
    const cssNode = this.cssNode.clone(),
          cssTransform = new Class(cssNode);

    return cssTransform;
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
