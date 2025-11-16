"use strict";

import MarkdownNode from "../../node/markdown";
import ClassNameMarkdown from "../../node/markdown/className";

export default class ContainerNameMarkdownNode extends MarkdownNode {
  className(context) {
    const className = this.fromSecondChildNode((secondChildNode) => {
      let className = null;

      const secondChildNodeClassNameMarkdownNode = (secondChildNode instanceof ClassNameMarkdown);

      if (secondChildNodeClassNameMarkdownNode) {
        const classNameMarkdownNode = secondChildNode; ///

        className = classNameMarkdownNode.className(context);
      }

      return className;
    });

    return className;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(ContainerNameMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
