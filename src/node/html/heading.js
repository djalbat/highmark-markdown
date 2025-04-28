"use strict";

import HTMLNode from "../../node/html";

import { removedLeadingWhitespace, replaceSpacesWithHyphens, removeNonAlphabeticAndSpaceCharacters } from "../../utilities/string";

export default class HeadingHTMLNode extends HTMLNode {
  // addAnchor(context) {
  //   const prepend = CONTENTS_PREPEND,
  //     identifier = this.identifier(context),
  //     anchorMarkdownNode = AnchorMarkdownNode.fromPrependAndIdentifier(prepend, identifier),
  //     prependedChildNode = anchorMarkdownNode; ///
  //
  //   this.prependChildNode(prependedChildNode);
  // }
  //
  // identifier(context) {
  //   const plainText = this.asPlainText(context),
  //     identifier = identifierFromPlainText(plainText);
  //
  //   return identifier;
  // }

  static tagName = "h1";

  static fromNothing(Class) { return HTMLNode.fromNothing(Class); }

  static fromOuterNode(Class, outerNode) { return HTMLNode.fromOuterNode(Class, outerNode); }
}

function identifierFromPlainText(plainText) {
  plainText = plainText.toLowerCase();  ///

  plainText = removedLeadingWhitespace(plainText);  ///

  plainText = removeNonAlphabeticAndSpaceCharacters(plainText); ///

  plainText = replaceSpacesWithHyphens(plainText);  ///

  const identifier = plainText; ///

  return identifier;
}

