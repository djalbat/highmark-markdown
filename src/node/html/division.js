"use strict";

import HTMLNode from "../../node/html";
import FootnoteHTMLTransform from "../../transform/html/footnote";

import { footnoteHTMLNodesFromNode, footnotesDirectiveHTMLNodeFromNode } from "../../utilities/html";
import FootnotesListHTMLTransform from "../../transform/html/footnotesList";

export default class DivisionHTMLNode extends HTMLNode {
  className(context) { return this.outerNode.className(context); }

  resolve(context) {
    const footnoteHTMLNodes = this.getFootnoteHTMLNodes(),
          footnoteHTMLTransforms = footnoteHTMLNodes.map((footnoteHTMLNode) => {
            const footnoteHTMLTransform = FootnoteHTMLTransform.fromFootnoteHTMLNode(footnoteHTMLNode, context);

            return footnoteHTMLTransform;
          }),
          footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;

    if (footnoteHTMLTransformsLength === 0) {
      return;
    }

    const divisionHTMLNode = this;  ///

    footnoteHTMLTransforms.forEach((footnoteHTMLTransform) => {
      footnoteHTMLTransform.removeFromDivisionHTMLNode(divisionHTMLNode, context);
    });

    const footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();

    if (footnotesDirectiveHTMLNode === null) {
      return;
    }

    // const footnotesListHTMLTransform = FootnotesListHTMLTransform.fromDivisionHTMLNodeAndFootnoteHTMLTransforms(divisionHTMLNode, footnoteHTMLTransforms, context);



  }

  getFootnoteHTMLNodes() {
    const node = this,  ///
          footnoteHTMLNodes = footnoteHTMLNodesFromNode(node);

    return footnoteHTMLNodes;
  }

  getFootnotesDirectiveHTMLNode() {
    const node = this,  ///
          footnotesDirectiveHTMLNode = footnotesDirectiveHTMLNodeFromNode(node)

    return footnotesDirectiveHTMLNode;
  }

  static tagName = "div";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(DivisionHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(DivisionHTMLNode, outerNode); }
}
