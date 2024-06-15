"use strict";

import MarkdownNode from "../../node/markdown";
import ContentsLinkMarkdownNode from "../../node/markdown/contentsLink";

import { CONTENTS_ITEM_RULE_NAME } from "../../ruleNames";

export default class ContentsItemMarkdownNode extends MarkdownNode {
  // getTokens(tokens = []) {
  //   const childNodes = this.getChildNodes(),
  //         contentsItemMarkdownNodes = childNodes;  ///
  //
  //   contentsItemMarkdownNodes.forEach((contentsItemMarkdownNode) => {
  //     contentsItemMarkdownNode.getTokens(tokens);
  //   });
  //
  //   return tokens;
  // }

  static fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context) {
    const ruleName = CONTENTS_ITEM_RULE_NAME,
          childNodes = [],
          contentsLinkMarkdownNode = ContentsLinkMarkdownNode.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);

    if (contentsLinkMarkdownNode !== null) {
      const node = nestedHeadingMarkdownNode.getNode(),
            headingMarkdownNode = node;  ///

      headingMarkdownNode.addAnchor(context);

      const childNode = contentsLinkMarkdownNode; ///

      childNodes.push(childNode);
    }

    const childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(),
          nestedHeadingMarkdownNodes = childNestedNodes,  ///
          nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;

    if (nestedHeadingMarkdownNodesLength > 0) {
      const contentsListMarkdownNode = ContentsListMarkdownNode.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
            childNode = contentsListMarkdownNode; ///

      childNodes.push(childNode);
    }

    const opacity = null,
          contentsItemMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity);

    return contentsItemMarkdownNode;
  }
}
