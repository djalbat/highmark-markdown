"use strict";

import HTMLTransform from "../../../transform/html";
import ContentsItemHTMLNode from "../../../node/html/item/contents";
import ContentsLinkHTMLTransform from "../../../transform/html/link/contents";

export default class ContentsItemHTMLTransform extends HTMLTransform {
  getContentsItemHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          contentsItemHTMLNode = htmlNode;  ///

    return contentsItemHTMLNode;
  }

  static fromNestedHeadingNode(nestedHeadingNode, context) {
    const htmlTransforms = [],
          contentsLinkHTMLTransform = ContentsLinkHTMLTransform.fromNestedHeadingNode(nestedHeadingNode, context);

    if (contentsLinkHTMLTransform !== null) {
      const htmlNode = nestedHeadingNode.getHTMLNode(),
            headingHTMLNode = htmlNode;  ///

      headingHTMLNode.anchor(context);

      const htmlTransform = contentsLinkHTMLTransform;  ///

      htmlTransforms.push(htmlTransform);
    }

    const childNestedNodes = nestedHeadingNode.getChildNestedNodes(),
          nestedHeadingNodes = childNestedNodes,  ///
          nestedHeadingNodesLength = nestedHeadingNodes.length;

    if (nestedHeadingNodesLength > 0) {
      const { ContentsListHTMLTransform } = ContentsItemHTMLTransform,
            contentsListHTMLTransform = ContentsListHTMLTransform.fromNestedHeadingNodes(nestedHeadingNodes, context),
            htmlTransform = contentsListHTMLTransform; ///

      htmlTransforms.push(htmlTransform);
    }

    const contentsItemHTMLNode = ContentsItemHTMLNode.fromHTMLTransforms(htmlTransforms),
          htmlNode = contentsItemHTMLNode,  ///
          contentsItemHTMLTransform = HTMLTransform.fromHTMLNode(ContentsItemHTMLTransform, htmlNode);

    return contentsItemHTMLTransform;
  }
}
