"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first, second } = arrayUtilities;

export default class FootnoteMarkdownNode extends MarkdownNode {
  identifier(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          referenceTerminalNode = firstChildNode,  ///
          identifier = identifierFromReferenceTerminalNode(referenceTerminalNode);

    return identifier;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnoteMarkdownNode, ruleName, childNodes, opacity); }
}

function identifierFromReferenceTerminalNode(referenceTerminalNode) {
  const content = referenceTerminalNode.getContent(),
        matches = content.match(/\[\^([^\]]+)]:/),
        secondMatch = second(matches),
        identifier = secondMatch; ///

  return identifier;
}