"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import AnchorMarkdownNode from "../../node/markdown/anchor";

import { plainTextFromChildNodes } from "../../utilities/childNodes";
import { replaceSpacesWithHyphens, removedLeadingWhitespace, removeNonAlphabeticAndSpaceCharacters } from "../../utilities/string";

const { second } = arrayUtilities;

export default class HeadingMarkdownNode extends MarkdownNode {
  getLevel() {
    const { level } = this.constructor;

    return level;
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

  position(context) {
    const { tokens } = context,
          firstSignificantToken = this.getFirstSignificantToken(),
          firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
          position = firstSignificantTokenIndex; ///

    return position;
  }

  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          lineMarkdownNode = secondChildNode,  ///
          lineMarkdownNodeHTML = lineMarkdownNode.asHTML(indent, context),
          childNodesHTML = lineMarkdownNodeHTML;  ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          lineMarkdownNodeHTML = secondChildNode, ///
          lineMarkdownNodeHTMLDOMElement = lineMarkdownNodeHTML.createDOMElement(context),
          domElement = lineMarkdownNodeHTMLDOMElement;  ///

    this.addDOMElement(domElement);
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
