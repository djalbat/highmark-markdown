"use strict";

import letters from "../letters";
import IndexList from "../index/list";
import Transform from "../transform";
import IndexListTransform from "../transform/indexList";
import IndexHeadingTransform from "../transform/indexHeading";

import { replaceNodes, replaceTokens } from "../utilities/transform";

export default class IndexTransform extends Transform {
  constructor(node, tokens, nodes) {
    super(node, tokens);

    this.nodes = nodes;
  }

  getNodes() {
    return this.nodes;
  }

  replace(replacedNode, parentNode, context) {
    let tokens;

    tokens = this.getTokens();

    const replacementNodes = this.nodes,  ///
          replacementTokens = tokens; ///

    ({ tokens } = context);

    replaceNodes(replacementNodes, replacedNode, parentNode);

    replaceTokens(replacementTokens, replacedNode, tokens);
  }

  replaceIndexDirectiveSubdivisionTransform(indexDirectiveSubDivisionTransform, divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = indexDirectiveSubDivisionTransform.getSubDivisionMarkdownNode(),
          replacedNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    this.replace(replacedNode, parentNode, context)
  }

  static fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
    let indexTransform = null;

    const indexList = IndexList.fromDivisionMarkdownNodes(divisionMarkdownNodes, context),
          indexTransforms = [];

    letters.forEach((letter) => {
      const indexListTransform = IndexListTransform.fromIndexListAndLetter(indexList, letter, context);

      if (indexListTransform !== null) {
        let indexTransform;

        const indexHeadingTransform = IndexHeadingTransform.fromLetter(letter, context);

        indexTransform = indexHeadingTransform; ///

        indexTransforms.push(indexTransform);

        indexTransform = indexListTransform;  ///

        indexTransforms.push(indexTransform);
      }
    });

    const indexListTransformsLength = indexTransforms.length;

    if (indexListTransformsLength > 0) {
      const node = null,
            nodes = [],
            tokens = [];

      indexTransforms.forEach((indexTransform) => {
        const node = indexTransform.getNode();

        indexTransform.getTokens(tokens);

        nodes.push(node);
      });

      indexTransform = Transform.fromNodeAndTokens(IndexTransform, node, tokens, nodes);
    }

    return indexTransform;
  }
}
