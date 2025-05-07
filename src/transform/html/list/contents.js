"use strict";

import HTMLTransform from "../../../transform/html";
import ContentsListHTMLNode from "../../../node/html/list/contents";
import ContentsItemHTMLTransform from "../../../transform/html/item/contents";

import { nestHTMLNodes } from "../../../utilities/contents";
import { headingHTMLNodesFromNode } from "../../../utilities/html";

class ContentsListHTMLTransform extends HTMLTransform {
  // replaceContentsDirectiveSubdivisionHTMLTransform(contentsDirectiveSubDivisionHTMLTransform, context) {
  //   const subDivisionHTMLNode = contentsDirectiveSubDivisionHTMLTransform.getSubDivisionHTMLNode(),
  //         replacedNode = subDivisionHTMLNode;  ///
  //
  //   super.replace(replacedNode, context)
  // }

  static fromNestedHeadingNodes(nestedHeadingNodes, context) {
    const contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context),
          contentsListHTMLNode = ContentsListHTMLNode.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms),
          node = contentsListHTMLNode, ///
          tokens = [];

    contentsItemHTMLTransforms.forEach((contentsItemHTMLTransform) => {
      contentsItemHTMLTransform.getTokens(tokens);
    });

    const contentsListHTMLTransform = HTMLTransform.fromNodeAndTokens(ContentsListHTMLTransform, node, tokens);

    return contentsListHTMLTransform;
  }

  static fromTopmostHTMLNode(topmostHTMLNode, context) {
    let contentsListHTMLTransform = null;

    const node = topmostHTMLNode, ///
          headingHTMLNodes = headingHTMLNodesFromNode(node),
          headingHTMLNodesLength = headingHTMLNodes.length;

    if (headingHTMLNodesLength > 0) {
      const nestedHeadingNodes = nestedHeadingNodesFromHeadingHTMLNodes(headingHTMLNodes),
            contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context),
            contentsListHTMLNode = ContentsListHTMLNode.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms),
            node = contentsListHTMLNode, ///
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

function nestedHeadingNodesFromHeadingHTMLNodes(headingHTMLNodes) {
  const htmlNodes = headingHTMLNodes, ///
        nestedNode = nestHTMLNodes(htmlNodes),
        childNestedNodes = nestedNode.getChildNestedNodes(),
        nestedHeadingNodes = childNestedNodes;  ///

  return nestedHeadingNodes;
}

function contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context) {
  const contentsItemHTMLTransforms = nestedHeadingNodes.map((nestedHeadingNode) => {
    const contentsItemHTMLTransform = ContentsItemHTMLTransform.fromNestedHeadingNode(nestedHeadingNode, context);

    return contentsItemHTMLTransform;
  });

  return contentsItemHTMLTransforms;
}
