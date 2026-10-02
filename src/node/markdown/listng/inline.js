"use strict";

import MarkdownNode from "../../../node/markdown";

import { removeBackticks } from "../../../utilities/string";
import { replaceEntities } from "../../../utilities/entities";

export default class InlineListingMarkdownNode extends MarkdownNode {
  content(context) {
    const content = this.fromFirstChildNode((firstChildNode) => {
      let content;

      const backtickedLiteralTerminalNode = firstChildNode; ///

      content = backtickedLiteralTerminalNode.getContent();

      content = removeBackticks(content); ///

      content = replaceEntities(content); ///

      return content;
    });

    return content;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(InlineListingMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
