"use strict";

export default class CSSTransform {
  constructor(cssNode) {
    this.cssNode = cssNode;
  }

  getCSSNode() {
    return this.cssNode;
  }

  appendTo(parentCSSNode, clone = false) {
    const cssNode = clone ?
                      this.cssNode.clone() :
                        this.cssNode,
          childNode = cssNode, ///
          parentNode = parentCSSNode;  ///

    parentNode.appendChildNode(childNode);
  }

  prependTo(parentCSSNode, clone = false) {
    const cssNode = clone ?
                      this.cssNode.clone() :
                        this.cssNode,
          childNode = cssNode, ///
          parentNode = parentCSSNode;  ///

    parentNode.prependChildNode(childNode);
  }

  mergeWith(cssNode, clone = false) {
    const parentCSSNode = cssNode.getParentCSSNode(),
          parentNode = parentCSSNode; ///

    cssNode = clone ?
                this.cssNode.clone() :
                  this.cssNode;

    const childNode = cssNode;  ///

    parentNode.prependChildNode(childNode);
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
