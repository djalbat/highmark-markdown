"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";
import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { second } = arrayUtilities;

export default class LinkMarkdownNode extends MarkdownNode {
  identifier(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          identifierTerminalNode = secondChildNode,  ///
          identifierTerminalNodeContent = identifierTerminalNode.getContent(),
          identifier = identifierTerminalNodeContent; ///

    return identifier;
  }

  attributeName() {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const identifier = this.identifier(context),
          attributeValue = `#${identifier}`; ///

    return attributeValue;
  }

  clear() {
    const innerHTML = EMPTY_STRING;

    this.setInnerHTML(innerHTML);
  }

  setNumber(number) {
    const innerHTML = `${number}`;

    this.setInnerHTML(innerHTML);
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(LinkMarkdownNode, ruleName, childNodes, ambiguous); }
}
