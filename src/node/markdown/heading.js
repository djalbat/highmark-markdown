"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import AnchorMarkdownNode from "../../node/markdown/anchor";

import { plainTextFromChildNodes } from "../../utilities/childNodes";
import { replaceSpacesWithHyphens, removedLeadingWhitespace, removeNonAlphabeticAndSpaceCharacters } from "../../utilities/string";

const { last } = arrayUtilities;

export default class HeadingMarkdownNode extends MarkdownNode {
  getDepth() {
    const { depth } = this.constructor;

    return depth;
  }

  addAnchor(context) {
    const identifier = this.identifier(context),
          anchorMarkdownNode = AnchorMarkdownNode.fromIdentifier(identifier),
          childNode = anchorMarkdownNode; ///

    this.prependChildNode(childNode);
  }

  identifier(context) {
    const childNodes = this.getChildNodes(),
          plainText = plainTextFromChildNodes(childNodes, context),
          identifier = identifierFromPlainText(plainText);

    return identifier;
  }

  getLineMarkdownNode() {
    const childNodes = this.getChildNodes(),
          lastChildNode = last(childNodes),
          lineMarkdownNode = lastChildNode;  ///

    return lineMarkdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity); }
}

function identifierFromPlainText(plainText) {
  plainText = plainText.toLowerCase();  ///

  plainText = removedLeadingWhitespace(plainText);  ///

  plainText = removeNonAlphabeticAndSpaceCharacters(plainText); ///

  plainText = replaceSpacesWithHyphens(plainText);  ///

  const identifier = plainText; ///

  return identifier;
}
