"use strict";

import Replacement from "../replacement";
import LineReplacement from "../replacement/line";
import ContentsLinkMarkdownNode from "../node/markdown/contentsLink";

export default class ContentsLinkReplacement extends Replacement {
  static fromNodeAndTokens(node, tokens) { return super.fromNodeAndTokens(ContentsLinkReplacement, node, tokens); }

  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    let contentsLinkReplacement = null;

    const node = nestedHeadingMarkdownNode.getNode(),
          headingMarkdownNode = node;  ///

    if (headingMarkdownNode !== null) {
      const identifier = headingMarkdownNode.identifier(context),
            lineMarkdownNode = headingMarkdownNode.getLineMarkdownNode(),
            lineReplacement = LineReplacement.fromLineMarkdownNode(lineMarkdownNode, context),
            contentsLinkMarkdownNode = ContentsLinkMarkdownNode.fromLineReplacementAndIdentifier(lineReplacement, identifier),
            node = contentsLinkMarkdownNode,  ///
            tokens = lineReplacement.getTokens();

      contentsLinkReplacement = ContentsLinkReplacement.fromNodeAndTokens(node, tokens);
    }

    return contentsLinkReplacement;
  }
}
