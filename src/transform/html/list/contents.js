"use strict";

import HTMLTransform from "../../../transform/html";
import ContentsListHTMLNode from "../../../node/html/list/contents";
import ContentsItemHTMLTransform from "../../../transform/html/item/contents";

import { nestHTMLNodes } from "../../../utilities/contents";
import { headingHTMLNodesFromNode } from "../../../utilities/html";

class ContentsListHTMLTransform extends HTMLTransform {
  replaceContentsDirectiveHTMLTransform(contentsDirectiveHTMLTransform) {
    const contentsDirectiveHTMLNode = contentsDirectiveHTMLTransform.getContentsDirectiveHTMLNode(),
          replacedHTMLNode = contentsDirectiveHTMLNode;  ///

    super.replace(replacedHTMLNode);
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
            htmlNode = contentsListHTMLNode;  ///

      contentsListHTMLTransform = HTMLTransform.fromHTMLNode(ContentsListHTMLTransform, htmlNode);
    }

    return contentsListHTMLTransform;
  }

  static fromNestedHeadingNodes(nestedHeadingNodes, context) {
    const contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context),
          contentsListHTMLNode = ContentsListHTMLNode.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms),
          htmlNode = contentsListHTMLNode,  ///
          contentsListHTMLTransform = HTMLTransform.fromHTMLNode(ContentsListHTMLTransform, htmlNode);

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
