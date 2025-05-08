"use strict";

import HTMLTransform from "../../transform/html";

import letters from "../../letters";
import IndexList from "../../index/list";
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

  // replace(replacedNode, parentNode, context) {
  //   let tokens;
  //
  //   tokens = this.getTokens();
  //
  //   const replacementNodes = this.nodes,  ///
  //         replacementTokens = tokens; ///
  //
  //   ({ tokens } = context);
  //
  //   replaceNodes(replacementNodes, replacedNode, parentNode);
  //
  //   replaceTokens(replacementTokens, replacedNode, tokens);
  // }

  // replaceIndexDirectiveSubdivisionHTMLTransform(indexDirectiveSubDivisionHTMLTransform, context) {
  //   const subDivisionHTMLNode = indexDirectiveSubDivisionHTMLTransform.getSubDivisionHTMLNode(),
  //         replacedNode = subDivisionHTMLNode;  ///
  //
  //   this.replace(replacedNode, context)
  // }

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
        const htmlNode = indexHTMLTransform.getNode();

        htmlNodes.push(htmlNode);
      });

      indexHTMLTransform = HTMLTransform.fromHTNLNode(IndexHTMLTransform, htmlNode, htmlNodes);
    }

    return indexHTMLTransform;
  }
}
