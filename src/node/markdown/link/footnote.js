"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../../node/markdown";

const { second } = arrayUtilities;

export default class FootnoteLinkMarkdownNode extends MarkdownNode {
  identifier(context) {
    const identifier = this.fromFirstChildNode((firstChildNode) => {
      const linkTerminalNode = firstChildNode, ///
            content = linkTerminalNode.getContent(),
            matches = content.match(/\[\^([^\]]+)]/),
            secondMatch = second(matches),
            identifier = secondMatch; ///

      return identifier;
    });

    return identifier;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnoteLinkMarkdownNode, ruleName, childNodes, opacity); }
}
