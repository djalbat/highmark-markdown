"use strict";

import MarkdownNode from "../../node/markdown";

import { plainTextFromChildNodes } from "../../utilities/childNodes";

export default class HeadingMarkdownNode extends MarkdownNode {
  getLevel() {
    const { level } = this.constructor;

    return level;
  }

  identifier(context) {
    const childNodes = this.getChildNodes(),
          leftTrimmed = true,
          plainText = plainTextFromChildNodes(childNodes, context, leftTrimmed);

    debugger
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity); }
}
