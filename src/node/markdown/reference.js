"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class ReferenceMarkdownNode extends MarkdownNode {
  identifier(context) {
    const identifier = this.fromFirstChildNode((firstChildNode) => {
      const referenceTerminalNode = firstChildNode,  ///
            identifier = identifierFromReferenceTerminalNode(referenceTerminalNode);

      return identifier;
    });

    return identifier;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(ReferenceMarkdownNode, ruleName, childNodes, opacity, precedence); }
}

function identifierFromReferenceTerminalNode(referenceTerminalNode) {
  const content = referenceTerminalNode.getContent(),
        matches = content.match(/\[\^([^\]]+)]:/),
        secondMatch = second(matches),
        identifier = secondMatch; ///

  return identifier;
}
