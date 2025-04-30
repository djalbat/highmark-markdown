"use strict";

import HTMLTransform from "../../transform/html"

export default class FootnoteHTMLTransform extends HTMLTransform {
  getFootnoteHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          footnoteHTMLNode = htmlNode;  ///

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

  removeFromDivisionHTMLNode(divisionHTMLNode, context) {
    const parentHTNLNode = divisionHTMLNode; ///

    super.removeFrom(parentHTNLNode, context);
  }

  static fromFootnoteHTMLNode(footnoteHTMLNde, context) {
    const htmlNode = footnoteHTMLNde, ///
          footnoteHTMLTransform = HTMLTransform.fromHTNLNOde(FootnoteHTMLTransform, htmlNode, context);

    return footnoteHTMLTransform;
  }
}
