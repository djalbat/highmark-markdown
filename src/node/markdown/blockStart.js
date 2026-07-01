"use strict";

import MarkdownNode from "../../node/markdown";
import ReleaseNameMarkdownNode from "./releaseName";
import LanguageNameMarkdownNode from "./languageName";

export default class BlockStartMarkdownNode extends MarkdownNode {
  releaseName(context) {
    const releaseName = this.fromFourthChildNode((fourthChildNode) => {
      let releaseName = null;

      const fourthChildNodeClassNameMarkdownNode = ReleaseNameMarkdownNode.prototype.isPrototypeOf(fourthChildNode);

      if (fourthChildNodeClassNameMarkdownNode) {
        const releaseNameMarkdownNode = fourthChildNode;  ///

        releaseName = releaseNameMarkdownNode.releaseName(context);
      }

      return releaseName;
    });

    return releaseName;
  }

  languageName(context) {
    const languageName = this.fromSecondChildNode((secondChildNode) => {
      let languageName = null;

      const secondChildNodeClassNameMarkdownNode = LanguageNameMarkdownNode.prototype.isPrototypeOf(secondChildNode);

      if (secondChildNodeClassNameMarkdownNode) {
        const languageNameMarkdownNode = secondChildNode;  ///

        languageName = languageNameMarkdownNode.languageName(context);
      }

      return languageName;
    });

    return languageName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(BlockStartMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
