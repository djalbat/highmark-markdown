"use strict";

import MarkdownNode from "../../node/markdown";
import AnchorMarkdownNode from "../../node/markdown/anchor";

import { plainTextFromChildNodes } from "../../utilities/childNodes";
import { replaceSpacesWithHyphens, removedLeadingWhitespace, removeNonAlphabeticAndSpaceCharacters } from "../../utilities/string";

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

  plainText = removedLeadingWhitespace(plainText);

  plainText = removeNonAlphabeticAndSpaceCharacters(plainText);

  plainText = replaceSpacesWithHyphens(plainText);

  const identifier = plainText; ///

  return identifier;
}
