"use strict";

import MarkdownNode from "../../node/markdown";
import PlainTextMarkdownNode from "./text/plain";

export default class InlineTextMarkdownNode extends MarkdownNode {
  isEndPlainText(context) {
    const endPlainText = this.fromFirstLastChildNode((firstLastChildNode) => {
      const endMarkdownNode = firstLastChildNode, ///
            endMarkdownNodePlainTextNode = (endMarkdownNode instanceof PlainTextMarkdownNode),
            endPlainText = endMarkdownNodePlainTextNode;  ///

      return endPlainText;
    });

    return endPlainText;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(InlineTextMarkdownNode, ruleName, childNodes, opacity); }
}
