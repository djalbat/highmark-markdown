"use strict";

import HTMLNode from "../../node/html";
import ContentsAnchorHTMLNode from "../../node/html/anchor/contents";

import { removeLeadingWhitespace, replaceSpacesWithHyphens, removeNonAlphabeticCharacters } from "../../utilities/string";

export default class HeadingHTMLNode extends HTMLNode {
  getLineHTMLNode() {
    const lineHTMLNode = this.findChildNode((childNode) => {
      const childNodeAnchorHTMLNode = (childNode instanceof ContentsAnchorHTMLNode),
            childNodeLineHTMLNode = !childNodeAnchorHTMLNode;

      if (childNodeLineHTMLNode) {
        return true;
      }
    });

    return lineHTMLNode;
  }

  identifier(context) {
    const plainText = this.childNodesAsPlainText(context),
          identifier = identifierFromPlainText(plainText);

    return identifier;
  }

  anchor(context) {
    const identifier = this.identifier(context),
          contentsAnchorHTMLNode = ContentsAnchorHTMLNode.fromIdentifier(identifier),
          childNode = contentsAnchorHTMLNode; ///

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
