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

  static fromNestedHeadingHTMLNode(nestedHeadingHTMLNode, context) {
    const transforms = [],
          contentsLinkHTMLTransform = ContentsLinkHTMLTransform.fromNestedHeadingHTMLNode(nestedHeadingHTMLNode, context);

    if (contentsLinkHTMLTransform !== null) {
      const node = nestedHeadingHTMLNode.getNode(),
            headingHTMLNode = node;  ///

      headingHTMLNode.addAnchor(context);

      const transform = contentsLinkHTMLTransform;

      transforms.push(transform);
    }

    const childNestedNodes = nestedHeadingHTMLNode.getChildNestedNodes(),
          nestedHeadingHTMLNodes = childNestedNodes,  ///
          nestedHeadingHTMLNodesLength = nestedHeadingHTMLNodes.length;

    if (nestedHeadingHTMLNodesLength > 0) {
      const { ContentsListHTMLTransform } = ContentsItemHTMLTransform,
            contentsListHTMLTransform = ContentsListHTMLTransform.fromNestedHeadingHTMLNodes(nestedHeadingHTMLNodes, context),
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
