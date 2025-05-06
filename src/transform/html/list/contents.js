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

  static fromNestedHeadingHTMLNodes(nestedHeadingHTMLNodes, context) {
    const contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingHTMLNodes(nestedHeadingHTMLNodes, context),
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
      const nestedHeadingHTMLNodes = nestedHeadingHTMLNodesFromHeadingHTMLNodes(headingHTMLNodes),
            contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingHTMLNodes(nestedHeadingHTMLNodes, context),
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

function nestedHeadingHTMLNodesFromHeadingHTMLNodes(headingHTMLNodes) {
  const htmlNodes = headingHTMLNodes, ///
        nestedNode = nestHTMLNodes(htmlNodes),
        childNestedNodes = nestedNode.getChildNestedNodes(),
        nestedHeadingHTMLNodes = childNestedNodes;  ///

  return nestedHeadingHTMLNodes;
}

function contentsItemHTMLTransformsFromNestedHeadingHTMLNodes(nestedHeadingHTMLNodes, context) {
  const contentsItemHTMLTransforms = nestedHeadingHTMLNodes.map((nestedHeadingHTMLNode) => {
    const contentsItemHTMLTransform = ContentsItemHTMLTransform.fromNestedHeadingHTMLNode(nestedHeadingHTMLNode, context);

    return contentsItemHTMLTransform;
  });

  return contentsItemHTMLTransforms;
}
