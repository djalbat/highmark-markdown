"use strict";

import HTMLTransform from "../../transform/html"

export default class DivisionHTMLTransform extends HTMLTransform {
  getDivisionHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          divisionHTMLNode = htmlNode;  ///;

    return divisionHTMLNode;
  }

  appendToTopmostHTMLNode(topmostHTMLNode) {
    const htmlNode = this.getHTMLNode(),
          childNode = htmlNode, ///
          parentNode = topmostHTMLNode; ///

    parentNode.appendChildNode(childNode);
  }

  paginate(divisionHTMLNodes, context) {
    const divisionHTMLNode = this.getDivisionHTMLNode();

    divisionHTMLNode.paginate(divisionHTMLNodes, context);
  }

  static fromDivisionHTMLNode(divisionHTMLNode) {
    const htmlNode = divisionHTMLNode, ///
          paragraphHTMLTransform = HTMLTransform.fromHTMLNode(DivisionHTMLTransform, htmlNode);

    return paragraphHTMLTransform;
  }
}
