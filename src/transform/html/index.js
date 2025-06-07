"use strict";

import letters from "../../letters";
import IndexList from "../../index/list";
import HTMLTransform from "../../transform/html";
import IndexListHTMLTransform from "../../transform/html/list/index";
import IndexHeadingHTMLTransform from "../../transform/html/heading/index";

export default class IndexHTMLTransform extends HTMLTransform {
  constructor(htmlNode, htmlNodes) {
    super(htmlNode);

    this.htmlNodes = htmlNodes;
  }

  getHTMLNodes() {
    return this.htmlNodes;
  }

  addAfter(siblingHTMLNode) {
    const childNode = siblingHTMLNode,  ///
          parentNode = childNode.getParentNode(),
          index = parentNode.indexOfChildNode(childNode),
          startIndex = index + 1,
          addedChildNodes = this.htmlNodes;  ///

    parentNode.addChildNodes(addedChildNodes, startIndex);
  }

  addAfterIndexDirectiveHTMLNode(indexDirectiveHTMLNode) {
    const siblingHTMLNode = indexDirectiveHTMLNode;  ///

    this.addAfter(siblingHTMLNode);
  }

  static fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes(indexDirectiveHTMLNode, divisionHTMLNodes, context) {
    let indexHTMLTransform = null;

    const indexList = IndexList.fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes(indexDirectiveHTMLNode, divisionHTMLNodes, context),
          indexHTMLTransforms = [];

    letters.forEach((letter) => {
      const indexListHTMLTransform = IndexListHTMLTransform.fromIndexListAndLetter(indexList, letter);

      if (indexListHTMLTransform !== null) {
        let indexHTMLTransform;

        const indexHeadingHTMLTransform = IndexHeadingHTMLTransform.fromLetter(letter);

        indexHTMLTransform = indexHeadingHTMLTransform; ///

        indexHTMLTransforms.push(indexHTMLTransform);

        indexHTMLTransform = indexListHTMLTransform;  ///

        indexHTMLTransforms.push(indexHTMLTransform);
      }
    });

    const indexListHTMLTransformsLength = indexHTMLTransforms.length;

    if (indexListHTMLTransformsLength > 0) {
      const htmlNode = null,
            htmlNodes = [];

      indexHTMLTransforms.forEach((indexHTMLTransform) => {
        const htmlNode = indexHTMLTransform.getHTMLNode();

        htmlNodes.push(htmlNode);
      });

      indexHTMLTransform = HTMLTransform.fromHTMLNode(IndexHTMLTransform, htmlNode, htmlNodes);
    }

    return indexHTMLTransform;
  }
}
