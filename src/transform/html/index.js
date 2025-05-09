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

  replace(replacedHTMLNode) {
    const parentNode = replacedHTMLNode.getParentNode(),
          replacedChildNode = replacedHTMLNode, ///
          replacementChildNodes = this.htmlNodes; ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  replaceIndexDirectiveHTMLTransform(indexDirectiveHTMLTransform) {
    const indexDirectiveHTMLNode = indexDirectiveHTMLTransform.getIndexDirectiveHTMLNode(),
          replacedHTMLNode = indexDirectiveHTMLNode;  ///

    this.replace(replacedHTMLNode)
  }

  static fromDivisionHTMLNodes(divisionHTMLNodes, context) {
    let indexHTMLTransform = null;

    const indexList = IndexList.fromDivisionHTMLNodes(divisionHTMLNodes, context),
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
