"use strict";

import MarkdownNode from "../../node/markdown";

export default class LanguageNameMarkdownNode extends MarkdownNode {
  languageName(context) {
    const languageName = this.fromSecondChildNode((secondChildNode) => {
      const terminalNode = secondChildNode, ///
            terminalNodeContent = terminalNode.getContent(),
            languageName = terminalNodeContent;  ///

      return languageName;
    });

    return languageName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(LanguageNameMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
