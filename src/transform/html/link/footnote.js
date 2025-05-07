"use strict";

import HTMLTransform from "../../../transform/html"
import DivisionHTMLNode from "../../../node/html/division";

export default class FootnoteLinkHTMLTransform extends HTMLTransform {
  getDivisionHTMLNode() {
    const footnoteLinkHTMLNode = this.getFootnoteLinkHTMLNode(),
          divisionHTMLNode = footnoteLinkHTMLNode.findAncestorNode((ancestorNode) => {
            const ancestorNodeDivisionHTMLNode = (ancestorNode instanceof DivisionHTMLNode);

            if (ancestorNodeDivisionHTMLNode) {
              return true;
            }
          });

    return divisionHTMLNode;
  }

  getContainingHTMLNode() {
    let containingHTMLNode;

    const footnoteLinkHTMLNode = this.getFootnoteLinkHTMLNode();

    footnoteLinkHTMLNode.someAncestorNode((ancestorNode) => {
      const ancestorNodeDivisionHTMLNode = (ancestorNode instanceof DivisionHTMLNode);

      if (ancestorNodeDivisionHTMLNode) {
        return true;
      }

      containingHTMLNode = ancestorNode;  ///
    });

    return containingHTMLNode;
  }

  getFootnoteLinkHTMLNode() {
    const node = this.getNode(),
          footnoteLinkHHTMLNode = node; ///

    return footnoteLinkHHTMLNode;
  }

  identifier(context) {
    const footnoteLinkHTMLNode = this.getFootnoteLinkHTMLNode(),
          identifier = footnoteLinkHTMLNode.identifier(context);

    return identifier;
  }

  static fromFootnoteLinkHTMLNode(footnoteLinkHTMLNode) {
    const htmlNode = footnoteLinkHTMLNode,  ///
          footnoteLinkHTMLTransform = HTMLTransform.fromHTMLNode(FootnoteLinkHTMLTransform, htmlNode);

    return footnoteLinkHTMLTransform;
  }
}
