"use strict";

import Replacement from "../replacement";
import ContentsLinkReplacement from "../replacement/contentsLink";
import ContentsItemMarkdownNode from "../node/markdown/contentsItem";

export default class ContentsItemReplacement extends Replacement {
  static fromNodeAndTokens(node, tokens) { return Replacement.fromNodeAndTokens(ContentsItemReplacement, node, tokens); }

  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    const replacements = [],
          contentsLinkReplacement = ContentsLinkReplacement.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);

    if (contentsLinkReplacement !== null) {
      const node = nestedHeadingMarkdownNode.getNode(),
            headingMarkdownNode = node;  ///

      headingMarkdownNode.addAnchor(context);

      const replacement = contentsLinkReplacement;

      replacements.push(replacement);
    }

    const childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(),
          nestedHeadingMarkdownNodes = childNestedNodes,  ///
          nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;

    if (nestedHeadingMarkdownNodesLength > 0) {
      const { ContentsListReplacement } = ContentsItemReplacement,
            contentsListReplacement = ContentsListReplacement.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
            replacement = contentsListReplacement; ///

      replacements.push(replacement);
    }

    const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromReplacements(replacements),
          node = contentsItemMarkdownNode,  ///
          tokens = [];

    replacements.forEach((replacement) => {
      replacement.getTokens(tokens);
    });

    const contentsItemReplacement = ContentsItemReplacement.fromNodeAndTokens(node, tokens);

    return contentsItemReplacement;
  }
}
