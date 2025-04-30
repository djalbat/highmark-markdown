"use strict";

import { Transform } from "occam-dom";
import { arrayUtilities } from "necessary";

import ContentsItemTransform from "../transform/contentsItem";
import ContentsListMarkdownNode from "../node/markdown/list/contents";

import { nestNodes } from "../utilities/contents";

const { filter } = arrayUtilities;

class ContentsListTransform extends Transform {
  replaceContentsDirectiveSubdivisionTransform(contentsDirectiveSubDivisionTransform, divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = contentsDirectiveSubDivisionTransform.getSubDivisionMarkdownNode(),
          replacedNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    super.replace(replacedNode, parentNode, context)
  }

  static fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    const contentsItemTransforms = contentsItemTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
          contentsListMarkdownNode = ContentsListMarkdownNode.fromContentsItemTransforms(contentsItemTransforms),
          node = contentsListMarkdownNode, ///
          tokens = [];

    contentsItemTransforms.forEach((contentsItemTransform) => {
      contentsItemTransform.getTokens(tokens);
    });

    const contentsListTransform = Transform.fromNodeAndTokens(ContentsListTransform, node, tokens);

    return contentsListTransform;
  }

  static fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
    let contentsListTransform = null;

    const headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context),
          headingMarkdownNodesLength = headingMarkdownNodes.length;

    if (headingMarkdownNodesLength > 0) {
      const nestedHeadingMarkdownNodes = nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes),
            contentsItemTransforms = contentsItemTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
            contentsListMarkdownNode = ContentsListMarkdownNode.fromContentsItemTransforms(contentsItemTransforms),
            node = contentsListMarkdownNode, ///
            tokens = [];

      contentsItemTransforms.forEach((contentsItemTransform) => {
        contentsItemTransform.getTokens(tokens);
      });

      contentsListTransform = Transform.fromNodeAndTokens(ContentsListTransform, node, tokens);
    }

    return contentsListTransform;
  }
}

Object.assign(ContentsItemTransform, {  ///
  ContentsListTransform
});

export default ContentsListTransform;

function nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes) {
  const nodes = headingMarkdownNodes, ///
        nestedNode = nestNodes(nodes),
        childNestedNodes = nestedNode.getChildNestedNodes(),
        nestedHeadingMarkdownNodes = childNestedNodes;  ///

  return nestedHeadingMarkdownNodes;
}

function contentsItemTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
  const contentsItemTransforms = nestedHeadingMarkdownNodes.map((nestedHeadingMarkdownNode) => {
    const contentsItemTransform = ContentsItemTransform.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);

    return contentsItemTransform;
  });

  return contentsItemTransforms;
}

function headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
  const headingMarkdownNodes = [],
        index = divisionMarkdownNodes.indexOf(divisionMarkdownNode),
        start = index + 1;

  divisionMarkdownNodes = divisionMarkdownNodes.slice(start); ///

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    const node = divisionMarkdownNode;  ///

    headingMarkdownNodesFromNode(node, headingMarkdownNodes);
  });

  filter(headingMarkdownNodes, (headingMarkdownNode) => {
    const { contentsDepth } = context,
      depth = headingMarkdownNode.getDepth();

    if (depth <= contentsDepth) {
      return true;
    }
  });

  return headingMarkdownNodes;
}

