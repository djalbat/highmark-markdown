"use strict";

import HTMLTransform from "../../transform/html"

export default class FootnoteHTMLTransform extends HTMLTransform {
  getFootnoteHTMLNode() {
    const node = this.getNode(),
          footnoteHTMLNode = node;  ///

    return footnoteHTMLNode;
  }

  getParagraphHTMLNode() {
    const footnoteHTMLNode = this.getFootnoteHTMLNode(),
          paragraphHTMLNode = footnoteHTMLNode.fromSecondChildNode((secondChildNode) => {
            const paragraphHTMLNode = secondChildNode;  ///

            return paragraphHTMLNode;
          });

    return paragraphHTMLNode;
  }

  static fromFootnoteHTMLNode(footnoteHTMLNde, context) {
    const htmlNode = footnoteHTMLNde, ///
          footnoteHTMLTransform = HTMLTransform.fromHTNLNOde(FootnoteHTMLTransform, htmlNode, context);

    return footnoteHTMLTransform;
  }
}
