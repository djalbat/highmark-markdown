"use strict";

import HTMLNode from "../../node/html";
import AnchorHTMLNode from "../../node/html/anchor";

import { CONTENTS_PREPEND } from "../../prepends";
import { removeLeadingWhitespace, replaceSpacesWithHyphens, removeNonAlphabeticCharacters } from "../../utilities/string";

export default class HeadingHTMLNode extends HTMLNode {
  getLineHTMLNode() {
    const lineHTMLNode = this.fromFirstChildNode((firstChildNode) => {
      const lineHTMLNode = firstChildNode; ///

      return lineHTMLNode;
    });

    return lineHTMLNode;
  }

  identifier(context) {
    const plainText = this.childNodesAsPlainText(context),
          identifier = identifierFromPlainText(plainText);

    return identifier;
  }

  anchor(context) {
    const prepend = CONTENTS_PREPEND,
          identifier = this.identifier(context),
          anchorHTMLNode = AnchorHTMLNode.fromPrependAndIdentifier(prepend, identifier),
          childNode = anchorHTMLNode; ///

    this.prependChildNode(childNode);
  }

  static tagName = "h1";

  static fromNothing(Class) { return HTMLNode.fromNothing(Class); }

  static fromOuterNode(Class, outerNode) { return HTMLNode.fromOuterNode(Class, outerNode); }
}

function identifierFromPlainText(plainText) {
  let string;

  string = plainText; ///

  string = string.toLowerCase();

  string = removeLeadingWhitespace(string);

  string = replaceSpacesWithHyphens(string);

  string = removeNonAlphabeticCharacters(string);

  const identifier = string;  ///

  return identifier;
}
