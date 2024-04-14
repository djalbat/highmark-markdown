"use strict";

import MarkdownNode from "../../node/markdown";
import AnchorMarkdownNode from "../../node/markdown/anchor";

import { HYPHEN, EMPTY_STRING } from "../../constants";
import { plainTextFromChildNodes } from "../../utilities/childNodes";

export default class HeadingMarkdownNode extends MarkdownNode {
  getLevel() {
    const { level } = this.constructor;

    return level;
  }

  addAnchor(context) {
    const identifier = this.identifier(context),
          anchorMarkdownNode = AnchorMarkdownNode.fromIdentifier(identifier),
          childNode = anchorMarkdownNode; ///

    this.addChildNode(childNode);
  }

  identifier(context) {
    const childNodes = this.getChildNodes(),
          leftTrimmed = true,
          plainText = plainTextFromChildNodes(childNodes, context, leftTrimmed),
          identifier = identifierFromPlainText(plainText);

    return identifier;
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity); }
}

function identifierFromPlainText(plainText) {
  plainText = plainText.toLowerCase();  ///

  plainText = plainText.replace(/[^a-z ]/g, EMPTY_STRING);

  plainText = plainText.replace(/ +/, HYPHEN);

  const identifier = plainText; ///

  return identifier;
}
