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
          leftTrimmed = true,
          plainText = plainTextFromChildNodes(childNodes, context, leftTrimmed),
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
          markedTextChildNode = secondChildNode,  ///
          markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context),
          childNodesHTML = markedTextChildNodeChildNodesHTML;

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const domElement = this.getDOMElement(),
          childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          markedTextChildNode = secondChildNode;  ///

    markedTextChildNode.createChildNodeDOMElements(domElement, context);
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
