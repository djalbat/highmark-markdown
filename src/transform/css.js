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
    const parentNode = cssNode; ///

    let childNodes;

    const node = this.cssNode; ///

    childNodes = node.getChildNodes();

    childNodes = cloneChildNodes(childNodes); ///

    parentNode.prependChildNodes(childNodes);
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

function cloneChildNodes(childNodes) {
  childNodes = childNodes.map((childNode) => {  ///
    childNode = childNode.clone();  ///

    return childNode;
  });

  return childNodes;
}

