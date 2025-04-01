"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import AnchorMarkdownNode from "../../node/markdown/anchor";

import { CONTENTS_PREPEND } from "../../prepends";
import { replaceSpacesWithHyphens, removedLeadingWhitespace, removeNonAlphabeticAndSpaceCharacters } from "../../utilities/string";

const { last } = arrayUtilities;

export default class HeadingMarkdownNode extends MarkdownNode {
  getDepth() {
    const { depth } = this.constructor;

    return depth;
  }

  addAnchor(context) {
    const prepend = CONTENTS_PREPEND,
          identifier = this.identifier(context),
          anchorMarkdownNode = AnchorMarkdownNode.fromPrependAndIdentifier(prepend, identifier),
          prependedChildNode = anchorMarkdownNode; ///

    this.prependChildNode(prependedChildNode);
  }

  identifier(context) {
    const plainText = this.asPlainText(context),
          identifier = identifierFromPlainText(plainText);

    return identifier;
  }

  getLineMarkdownNode() {
    const lineMarkdownNode = this.fromFirstLastChildNode((firstLastChildNode) => {
      const lineMarkdownNode = firstLastChildNode;  ///

      return lineMarkdownNode;
    });

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
