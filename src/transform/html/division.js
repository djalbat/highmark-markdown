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

  resolve(divisionHTMLNodes, start, context) {
    const divisionHTMLNode = this.getDivisionHTMLNode();

    start = divisionHTMLNode.resolve(start, context);

    divisionHTMLNodes.push(divisionHTMLNode);

    return start;
  }

  static fromDivisionHTMLNode(divisionHTMLNode) {
    const htmlNode = divisionHTMLNode, ///
          paragraphHTMLTransform = HTMLTransform.fromHTNLNOde(DivisionHTMLTransform, htmlNode);

    return paragraphHTMLTransform;
  }
}
