"use strict";

import { arrayUtilities } from "necessary";

import HTMLTransform from "../../../transform/html";
import ContentsListMarkdownNode from "../../../node/markdown/list/contents";
import ContentsItemHTMLTransform from "../../../transform/html/item/contents";

import { nestNodes } from "../../../utilities/contents";

const { filter } = arrayUtilities;

class ContentsListHTMLTransform extends HTMLTransform {
  // replaceContentsDirectiveSubdivisionHTMLTransform(contentsDirectiveSubDivisionHTMLTransform, context) {
  //   const subDivisionMarkdownNode = contentsDirectiveSubDivisionHTMLTransform.getSubDivisionMarkdownNode(),
  //         replacedNode = subDivisionMarkdownNode;  ///
  //
  //   super.replace(replacedNode, context)
  // }

  static fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    const contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
          contentsListMarkdownNode = ContentsListMarkdownNode.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms),
          node = contentsListMarkdownNode, ///
          tokens = [];

    contentsItemHTMLTransforms.forEach((contentsItemHTMLTransform) => {
      contentsItemHTMLTransform.getTokens(tokens);
    });

    const contentsListHTMLTransform = HTMLTransform.fromNodeAndTokens(ContentsListHTMLTransform, node, tokens);

    return contentsListHTMLTransform;
  }

  static fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
    let contentsListHTMLTransform = null;

    const headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context),
          headingMarkdownNodesLength = headingMarkdownNodes.length;

    if (headingMarkdownNodesLength > 0) {
      const nestedHeadingMarkdownNodes = nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes),
            contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
            contentsListMarkdownNode = ContentsListMarkdownNode.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms),
            node = contentsListMarkdownNode, ///
            tokens = [];

      contentsItemHTMLTransforms.forEach((contentsItemHTMLTransform) => {
        contentsItemHTMLTransform.getTokens(tokens);
      });

      contentsListHTMLTransform = HTMLTransform.fromNodeAndTokens(ContentsListHTMLTransform, node, tokens);
    }

    return contentsListHTMLTransform;
  }
}

Object.assign(ContentsItemHTMLTransform, {  ///
  ContentsListHTMLTransform
});

export default ContentsListHTMLTransform;

function nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes) {
  const nodes = headingMarkdownNodes, ///
        nestedNode = nestNodes(nodes),
        childNestedNodes = nestedNode.getChildNestedNodes(),
        nestedHeadingMarkdownNodes = childNestedNodes;  ///

  return nestedHeadingMarkdownNodes;
}

function contentsItemHTMLTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
  const contentsItemHTMLTransforms = nestedHeadingMarkdownNodes.map((nestedHeadingMarkdownNode) => {
    const contentsItemHTMLTransform = ContentsItemHTMLTransform.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);

    return contentsItemHTMLTransform;
  });

  return contentsItemHTMLTransforms;
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

