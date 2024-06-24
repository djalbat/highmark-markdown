"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import ClassNameMarkdownNode from "./className";

const { second } = arrayUtilities;

export default class BlockListingStartMarkdownNode extends MarkdownNode {
  className(context) {
    let className = null;

    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          secondChildNodeClassNameMarkdownNode = (secondChildNode instanceof ClassNameMarkdownNode)

    if (secondChildNodeClassNameMarkdownNode) {
      const classNameMarkdownNode = secondChildNode; ///

      className = classNameMarkdownNode.className(context);
    }

    return className;
  }

  static lines = 2;

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingStartMarkdownNode, ruleName, childNodes, opacity); }
}
