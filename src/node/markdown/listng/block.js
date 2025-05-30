"use strict";

import MarkdownNode from "../../../node/markdown";
import BlockLineHTMLNode from "../../html/line/block";

export default class BlockListingMarkdownNode extends MarkdownNode {
  content(context) {
    const content = this.reduceChildMarkdownNode((content, childMarkdownNode) => {
      const childMarkdownNodeBlockLineMarkdownNode = (childMarkdownNode instanceof BlockLineHTMLNode);

      if (childMarkdownNodeBlockLineMarkdownNode) {
        const blockLineMarkdownNode = childMarkdownNodeBlockLineMarkdownNode, ///
              blockLineMarkdownNodeContent = blockLineMarkdownNode.content(context);

        content = (content !== null) ?
                    `${content}${blockLineMarkdownNodeContent}` :
                      blockLineMarkdownNodeContent; ///
      }

      return content;
    }, null);

    return content;
  }

  className(context) {
    const className = this.fromFirstChildNode((firstChildNode) => {
      const blockStartMarkdownNode = firstChildNode, ///
            className = blockStartMarkdownNode.className(context);

      return className;
    });

    return className;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, opacity); }
}
