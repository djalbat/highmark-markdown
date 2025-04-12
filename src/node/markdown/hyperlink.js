"use strict";

import MarkdownNode from "../../node/markdown";

export default class HyperlinkLinkMarkdownNode extends MarkdownNode {
  url(context) {
    const multiplicity = this.getMultiplicity();

    let urlTerminalNode;

    if (multiplicity === 1) {
      urlTerminalNode = this.fromFirstChildNode((firstChildNode) => {
        const urlTerminalNode = firstChildNode; ///

        return urlTerminalNode;
      });
    } else {
      urlTerminalNode = this.fromSecondLastChildNode((secondLastChildNode) => {
        const urlTerminalNode = secondLastChildNode; ///

        return urlTerminalNode;
      });
    }

    const urlTerminalNodeContent = urlTerminalNode.getContent(),
          url = urlTerminalNodeContent; ///

    return url;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(HyperlinkLinkMarkdownNode, ruleName, childNodes, opacity); }
}
