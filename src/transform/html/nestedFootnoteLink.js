"use strict";

import HTMLTransform from "../../transform/html"

export default class NestedFootnoteLinkHTMLTransform extends HTMLTransform {
  static fromNestedFootnoteLinkHTMLNode(nestedFootnoteLinkHTMLNode) {
    const htmlNode = nestedFootnoteLinkHTMLNode,  ///
          nestedFootnoteLinkHTMLTransform = HTMLTransform.fromHTNLNOde(NestedFootnoteLinkHTMLTransform, htmlNode);

    return nestedFootnoteLinkHTMLTransform;
  }
}
