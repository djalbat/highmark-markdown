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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(LanguageNameMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
