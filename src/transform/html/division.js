"use strict";

import HTMLTransform from "../../transform/html"

export default class DivisionHTMLTransform extends HTMLTransform {
  getDivisionHTMLNode() {
    const node = this.getNode(),
          divisionHTMLNode = node;  ///;

    return divisionHTMLNode;
  }

  appendToTopmostHTMLNode(topmostHTMLNode) {
    const node = this.getNode(),
          childNode = node, ///
          parentNode = topmostHTMLNode; ///

    parentNode.appendChildNode(childNode);
  }

  resolve(divisionHTMLNodes, context) {
    const divisionHTMLNode = this.getDivisionHTMLNode();

    divisionHTMLNode.resolve(divisionHTMLNodes, context);
  }

  static fromDivisionHTMLNode(divisionHTMLNode) {
    const htmlNode = divisionHTMLNode, ///
          paragraphHTMLTransform = HTMLTransform.fromHTMLNode(DivisionHTMLTransform, htmlNode);

    return paragraphHTMLTransform;
  }
}
