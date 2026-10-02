"use strict";

import MarkdownNode from "../../node/markdown";
import ClassNameMarkdown from "../../node/markdown/className";

export default class ContainerNameMarkdownNode extends MarkdownNode {
  className(context) {
    const className = this.fromSecondChildNode((secondChildNode) => {
      let className = null;

      const secondChildNodeClassNameMarkdownNode = ClassNameMarkdown.prototype.isPrototypeOf(secondChildNode);

      if (secondChildNodeClassNameMarkdownNode) {
        const classNameMarkdownNode = secondChildNode; ///

        className = classNameMarkdownNode.className(context);
      }

      return className;
    });

    return className;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(ContainerNameMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
