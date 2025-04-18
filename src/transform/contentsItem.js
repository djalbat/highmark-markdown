"use strict";

import { Transform } from "occam-dom";

import ContentsLinkTransform from "../transform/contentsLink";
import ContentsItemMarkdownNode from "../node/markdown/contentsItem";

export default class ContentsItemTransform extends Transform {
  getContentsItemMarkdownNode() {
    const node = this.getNode(),
          contentsItemMarkdownNode = node;  ///

    return contentsItemMarkdownNode;
  }

  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    const transforms = [],
          contentsLinkTransform = ContentsLinkTransform.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);

    if (contentsLinkTransform !== null) {
      const node = nestedHeadingMarkdownNode.getNode(),
            headingMarkdownNode = node;  ///

      headingMarkdownNode.addAnchor(context);

      const transform = contentsLinkTransform;

      transforms.push(transform);
    }

    const childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(),
          nestedHeadingMarkdownNodes = childNestedNodes,  ///
          nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;

    if (nestedHeadingMarkdownNodesLength > 0) {
      const { ContentsListTransform } = ContentsItemTransform,
            contentsListTransform = ContentsListTransform.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
            transform = contentsListTransform; ///

      transforms.push(transform);
    }

    const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromTransforms(transforms),
          node = contentsItemMarkdownNode,  ///
          tokens = [];

    transforms.forEach((transform) => {
      transform.getTokens(tokens);
    });

    const contentsItemTransform = Transform.fromNodeAndTokens(ContentsItemTransform, node, tokens);

    return contentsItemTransform;
  }
}
