"use strict";

import MarkdownNode from "../../node/markdown";
import ContentsLinkMarkdownNode from "../../node/markdown/contentsLink";

import { CONTENTS_ITEM_RULE_NAME } from "../../ruleNames";

export default class ContentsItemMarkdownNode extends MarkdownNode {
  static fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context) {
    const contentsLinkMarkdownNode = ContentsLinkMarkdownNode.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context),
          contentsListMarkdownNode = ContentsListMarkdownNode.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context),
          childNodes = [];

    if (contentsLinkMarkdownNode !== null) {
      const childNode = contentsLinkMarkdownNode; ///

      childNodes.push(childNode);

      const node = nestedHeadingMarkdownNode.getNode(),
            headingMarkdownNode = node;  ///

      headingMarkdownNode.addAnchor(context);
    }

    if (contentsListMarkdownNode !== null) {
      const childNode = contentsListMarkdownNode; ///

      childNodes.push(childNode);
    }

    const ruleName = CONTENTS_ITEM_RULE_NAME,
          opacity = null,
          contentsItemMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity);

    return contentsItemMarkdownNode;
  }
}
