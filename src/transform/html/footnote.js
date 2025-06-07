"use strict";

import HTMLTransform from "../../transform/html"

export default class FootnoteHTMLTransform extends HTMLTransform {
  identifier(context) {
    const footnoteHTMLNode = this.getFootnoteHTMLNode(),
          identifier = footnoteHTMLNode.identifier(context);

    return identifier;
  }

  getFootnoteHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          footnoteHTMLNode = htmlNode;  ///

    return footnoteHTMLNode;
  }

  getParagraphHTMLNode() {
    const footnoteHTMLNode = this.getFootnoteHTMLNode(),  ///
          paragraphHTMLNode = footnoteHTMLNode.fromSecondChildNode((secondChildNode) => {
            const paragraphHTMLNode = secondChildNode;  ///

            return paragraphHTMLNode;
          });

    return paragraphHTMLNode;
  }

  addAfterFootnoteLinkHTMLTransform(footnoteLinkHTMLTransform) {
    const containingHTMLNode = footnoteLinkHTMLTransform.getContainingHTMLNode(),
          siblingHTMLNode = containingHTMLNode;  ///

    this.addAfter(siblingHTMLNode);
  }

  static fromFootnoteHTMLNode(footnoteHTMLNde) {
    const htmlNode = footnoteHTMLNde, ///
          footnoteHTMLTransform = HTMLTransform.fromHTMLNode(FootnoteHTMLTransform, htmlNode);

    return footnoteHTMLTransform;
  }
}
