"use strict";

import HTMLTransform from "../../../transform/html";
import ContentsItemMarkdownNode from "../../../node/markdown/item/contents";
import ContentsLinkHTMLTransform from "../../../transform/html/link/contents";

export default class ContentsItemHTMLTransform extends HTMLTransform {
  getContentsItemMarkdownNode() {
    const node = this.getNode(),
          contentsItemMarkdownNode = node;  ///

    return contentsItemMarkdownNode;
  }

  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    const transforms = [],
          contentsLinkHTMLTransform = ContentsLinkHTMLTransform.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);

    if (contentsLinkHTMLTransform !== null) {
      const node = nestedHeadingMarkdownNode.getNode(),
            headingMarkdownNode = node;  ///

      headingMarkdownNode.addAnchor(context);

      const transform = contentsLinkHTMLTransform;

      transforms.push(transform);
    }

    const childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(),
          nestedHeadingMarkdownNodes = childNestedNodes,  ///
          nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;

    if (nestedHeadingMarkdownNodesLength > 0) {
      const { ContentsListHTMLTransform } = ContentsItemHTMLTransform,
            contentsListHTMLTransform = ContentsListHTMLTransform.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
            transform = contentsListHTMLTransform; ///

      transforms.push(transform);
    }

    const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromHTMLTransforms(transforms),
          node = contentsItemMarkdownNode,  ///
          tokens = [];

    transforms.forEach((transform) => {
      transform.getTokens(tokens);
    });

    const contentsItemHTMLTransform = HTMLTransform.fromNodeAndTokens(ContentsItemHTMLTransform, node, tokens);

    return contentsItemHTMLTransform;
  }
}
