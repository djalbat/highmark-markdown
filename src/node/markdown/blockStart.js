"use strict";

import MarkdownNode from "../../node/markdown";
import ClassNameMarkdownNode from "./className";

export default class BlockStartMarkdownNode extends MarkdownNode {
  className(context) {
    const className = this.fromSecondChildNode((secondChildNode) => {
      let className = null;

      const secondChildNodeClassNameMarkdownNode = (secondChildNode instanceof ClassNameMarkdownNode);

      if (secondChildNodeClassNameMarkdownNode) {
        const classNameMarkdownNode = secondChildNode;  ///

        className = classNameMarkdownNode.className(context);
      }

      return className;
    });

    return className;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(BlockStartMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
