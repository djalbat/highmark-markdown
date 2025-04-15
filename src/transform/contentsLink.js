"use strict";

import Replacement from "./";
import LineReplacement from ".//line";
import ContentsLinkMarkdownNode from "../node/markdown/contentsLink";

export default class ContentsLinkReplacement extends Replacement {
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

      contentsLinkReplacement = Replacement.fromNodeAndTokens(ContentsLinkReplacement, node, tokens);
    }

    return contentsLinkReplacement;
  }
}
