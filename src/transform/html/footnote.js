"use strict";

import HTMLTransform from "../../transform/html"
import LineHTMLTransform from "./line";

export default class FootnoteHTMLTransform extends HTMLTransform {
  getLineHTMLNode() {
    const paragraphHTMLNode = this.getParagraphHTMLNode(),
          lineHTMLNode = paragraphHTMLNode.fromFirstChildNode((firstChildNode) => {
            const lineHTMLNode = firstChildNode;  ///

            return lineHTMLNode;
          });

    return lineHTMLNode;
  }

  getParagraphHTMLNode() {
    const node = this.getNode(),
          footnoteHTMLNode = node,  ///
          paragraphHTMLNode = footnoteHTMLNode.fromSecondChildNode((secondChildNode) => {
            const paragraphHTMLNode = secondChildNode;  ///

            return paragraphHTMLNode;
          });

    return paragraphHTMLNode;
  }

  static fromFootnoteHTMLNode(footnoteHTMLNde) {
    const htmlNode = footnoteHTMLNde, ///
          footnoteHTMLTransform = HTMLTransform.fromHTNLNOde(FootnoteHTMLTransform, htmlNode);

    return footnoteHTMLTransform;
  }
}
