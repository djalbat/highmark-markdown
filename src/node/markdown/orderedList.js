"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { START_ATTRIBUTE_NAME } from "../../attributeNames";
import {EMPTY_STRING} from "../../constants";

const { first } = arrayUtilities;

export default class OrderedListMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const start = this.getStart(),
          tagName = this.getTagName(),
          childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = `<${tagName} start="${start}">`,
          closingTag = `<\\${tagName}>`,
          html = `${indent}${startingTag}
${childNodesHTML}${indent}${closingTag}
`;

    return html;
  }

  getAttributeName() {
    const attributeName = START_ATTRIBUTE_NAME;

    return attributeName;
  }

  getAttributeValue(context) {
    const start = this.getStart(),
          attributeValue = start; ///

    return attributeValue;
  }

  getStart() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          firstOrderedListItemMarkdownNode = firstChildNode,  ///
          start = firstOrderedListItemMarkdownNode.getStart();

    return start;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(OrderedListMarkdownNode, ruleName, childNodes, ambiguous); }
}
