"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";
import { FOOTNOTE_PREPEND } from "../../prepends";
import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { first, second } = arrayUtilities;

export default class FootnoteLinkMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, opacity, precedence, domElement, number) {
    super(ruleName, childNodes, opacity, precedence, domElement);

    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  setNumber(number) {
    this.number = number;
  }

  content(context) {
    const content = (this.number !== null) ?
                      this.number :
                        EMPTY_STRING;

    return content;
  }

  identifier(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          linkTerminalNode = firstChildNode,  ///
          identifier = identifierFromLinkTerminalNode(linkTerminalNode);

    return identifier;
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const prepend = FOOTNOTE_PREPEND,
          identifier = this.identifier(context),
          attributeValue = `#${prepend}-${identifier}`; ///

    return attributeValue;
  }

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode; ///

    this.addDOMElement(domElement);
  }

  clone() { return super.clone(this.number); }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const number = null,
          footnoteLinkMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnoteLinkMarkdownNode, ruleName, childNodes, opacity, number);

    return footnoteLinkMarkdownNode;
  }
}

function identifierFromLinkTerminalNode(linkTerminalNode) {
  const content = linkTerminalNode.getContent(),
        matches = content.match(/\[\^([^\]]+)]/),
        secondMatch = second(matches),
        identifier = secondMatch; ///

  return identifier;
}