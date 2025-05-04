"use strict";

import HTMLTransform from "../../transform/html"

export default class FootnoteHTMLTransform extends HTMLTransform {
  getLineHTMLNode() {
    const paragraphHTMLNode = this.getParagraphHTMLNode(),
          lineHTMLNode = paragraphHTMLNode.fromFirstChildNode((firstChildNode) => {
            const lineHTMLNode = firstChildNode;  ///

            return lineHTMLNode;
          });

    return lineHTMLNode;
  }

  getFootnoteHTMLNode() {
    const node = this.getNode(),
          footnoteHTMLNode = node;  ///

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

  identifier(context) {
    const footnoteHTMLNode = this.getFootnoteHTMLNode(),
          identifier = footnoteHTMLNode.identifier(context);

    return identifier;
  }

  matchIdentifier(identifier, context) {
    const identifierA = identifier; ///

    identifier = this.identifier(context);

    const identifierB = identifier, ///
          identifierMatches = (identifierA === identifierB);

    return identifierMatches;
  }

  addAfterFootnoteLinkHTMLTransform(footnoteLinkHTMLTransform) {
    const containingHTMLNode = footnoteLinkHTMLTransform.getContainingHTMLNode(),
          existingHTMLNode = containingHTMLNode;  ///

    this.addAfter(existingHTMLNode);
  }

  static fromFootnoteHTMLNode(footnoteHTMLNde) {
    const htmlNode = footnoteHTMLNde, ///
          footnoteHTMLTransform = HTMLTransform.fromHTNLNOde(FootnoteHTMLTransform, htmlNode);

    return footnoteHTMLTransform;
  }
}
