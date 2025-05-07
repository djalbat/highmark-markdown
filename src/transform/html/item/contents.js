"use strict";

import HTMLTransform from "../../../transform/html";
import ContentsItemHTMLNode from "../../../node/html/item/contents";
import ContentsLinkHTMLTransform from "../../../transform/html/link/contents";

export default class ContentsItemHTMLTransform extends HTMLTransform {
  getContentsItemHTMLNode() {
    const node = this.getNode(),
          contentsItemHTMLNode = node;  ///

    return contentsItemHTMLNode;
  }

  static fromNestedHeadingNode(nestedHeadingNode, context) {
    const transforms = [],
          contentsLinkHTMLTransform = ContentsLinkHTMLTransform.fromNestedHeadingNode(nestedHeadingNode, context);

    if (contentsLinkHTMLTransform !== null) {
      const node = nestedHeadingNode.getNode(),
            headingHTMLNode = node;  ///

      headingHTMLNode.addAnchor(context);

      const transform = contentsLinkHTMLTransform;

      transforms.push(transform);
    }

    const childNestedNodes = nestedHeadingNode.getChildNestedNodes(),
          nestedHeadingNodes = childNestedNodes,  ///
          nestedHeadingNodesLength = nestedHeadingNodes.length;

    if (nestedHeadingNodesLength > 0) {
      const { ContentsListHTMLTransform } = ContentsItemHTMLTransform,
            contentsListHTMLTransform = ContentsListHTMLTransform.fromNestedHeadingNodes(nestedHeadingNodes, context),
            transform = contentsListHTMLTransform; ///

      transforms.push(transform);
    }

    const contentsItemHTMLNode = ContentsItemHTMLNode.fromHTMLTransforms(transforms),
          node = contentsItemHTMLNode,  ///
          tokens = [];

    transforms.forEach((transform) => {
      transform.getTokens(tokens);
    });

    const contentsItemHTMLTransform = HTMLTransform.fromNodeAndTokens(ContentsItemHTMLTransform, node, tokens);

    return contentsItemHTMLTransform;
  }
}
