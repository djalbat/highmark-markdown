"use strict";

import Replacement from "./";
import ContentsLinkReplacement from ".//contentsLink";
import ContentsItemMarkdownNode from "../node/markdown/contentsItem";

export default class ContentsItemReplacement extends Replacement {
  getContentsItemMarkdownNode() {
    const node = this.getNode(),
          contentsItemMarkdownNode = node;  ///

    return contentsItemMarkdownNode;
  }

  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    const transforms = [],
          contentsLinkReplacement = ContentsLinkReplacement.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);

    if (contentsLinkReplacement !== null) {
      const node = nestedHeadingMarkdownNode.getNode(),
            headingMarkdownNode = node;  ///

      headingMarkdownNode.addAnchor(context);

      const transform = contentsLinkReplacement;

      transforms.push(transform);
    }

    const childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(),
          nestedHeadingMarkdownNodes = childNestedNodes,  ///
          nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;

    if (nestedHeadingMarkdownNodesLength > 0) {
      const { ContentsListReplacement } = ContentsItemReplacement,
            contentsListReplacement = ContentsListReplacement.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
            transform = contentsListReplacement; ///

      transforms.push(transform);
    }

    const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromReplacements(transforms),
          node = contentsItemMarkdownNode,  ///
          tokens = [];

    transforms.forEach((transform) => {
      transform.getTokens(tokens);
    });

    const contentsItemReplacement = Replacement.fromNodeAndTokens(ContentsItemReplacement, node, tokens);

    return contentsItemReplacement;
  }
}
