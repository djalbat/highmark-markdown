"use strict";

import Transform from "../transform";
import LineTransform from "../transform/line";
import ContentsLinkMarkdownNode from "../node/markdown/contentsLink";

export default class ContentsLinkTransform extends Transform {
  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    let contentsLinkTransform = null;

    const node = nestedHeadingMarkdownNode.getNode(),
          headingMarkdownNode = node;  ///

    if (headingMarkdownNode !== null) {
      const identifier = headingMarkdownNode.identifier(context),
            lineMarkdownNode = headingMarkdownNode.getLineMarkdownNode(),
            lineTransform = LineTransform.fromLineMarkdownNode(lineMarkdownNode, context),
            contentsLinkMarkdownNode = ContentsLinkMarkdownNode.fromLineTransformAndIdentifier(lineTransform, identifier),
            node = contentsLinkMarkdownNode,  ///
            tokens = lineTransform.getTokens();

      contentsLinkTransform = Transform.fromNodeAndTokens(ContentsLinkTransform, node, tokens);
    }

    return contentsLinkTransform;
  }
}
