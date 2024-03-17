"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import ClassNameMarkdownNode from "./className";

const { second } = arrayUtilities;

export default class BlockListingStartMarkdownNode extends MarkdownNode {
  getClassName() {
    let className = null;

    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          secondChildNodeClassNameMarkdownNode = (secondChildNode instanceof ClassNameMarkdownNode)

    if (secondChildNodeClassNameMarkdownNode) {
      const classNameMarkdownNode = secondChildNode; ///

      className = classNameMarkdownNode.getClassName();
    }

    return className;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingStartMarkdownNode, ruleName, childNodes, opacity); }
}
