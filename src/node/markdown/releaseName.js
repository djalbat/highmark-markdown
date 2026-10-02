"use strict";

import MarkdownNode from "../../node/markdown";

export default class ReleaseNameMarkdownNode extends MarkdownNode {
  releaseName(context) {
    const releaseName = this.fromSecondChildNode((secondChildNode) => {
      const terminalNode = secondChildNode, ///
            terminalNodeContent = terminalNode.getContent(),
            releaseName = terminalNodeContent;  ///

      return releaseName;
    });

    return releaseName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReleaseNameMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
