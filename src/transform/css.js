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

  mergeWith(cssNode) {
    cssNode = cssNode.clone();  ///

    const parentNode = cssNode; ///

    let childCSSNodes;

    childCSSNodes = this.cssNode.getChildCSSNodes();

    childCSSNodes = cloneChildCSSNodes(childCSSNodes);  ///

    const childNodes = childCSSNodes; ///

    parentNode.prependChildNodes(childNodes);

    return cssNode;
  }

  remove() {
    const parentCSSNode = this.cssNode.getParentCSSNode(),
          parentNode = parentCSSNode, ///
          childNode = this.cssNode; ///

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

function cloneChildCSSNodes(childCSSNodes) {
  childCSSNodes = childCSSNodes.map((childCSSNode) => {  ///
    childCSSNode = childCSSNode.clone();  ///

    return childCSSNode;
  });

  return childCSSNodes;
}

