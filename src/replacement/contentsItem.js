"use strict";

import Replacement from "../replacement";
import ContentsLinkReplacement from "../replacement/contentsLink";

export default class ContentsItemReplacement extends Replacement {
  appendToContentsListMarkdownNode(contentsListMarkdownNode, context) {
    const parentNode = contentsListMarkdownNode; ///

    super.appendTo(parentNode, context);
  }

  static fromNode(node, context) { return Replacement.fromNode(ContentsItemReplacement, node, context); }

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

    debugger

    return contentsItemMarkdownNode;
  }
}
