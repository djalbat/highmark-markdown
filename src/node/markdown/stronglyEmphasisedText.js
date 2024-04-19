"use strict";

import elementMap from "../../elementMap";
import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

import { STRONG_TEXT_RULE_NAME } from "../../ruleNames";

const { tagName } = elementMap[STRONG_TEXT_RULE_NAME];

class StronglyEmphasisedTextMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    let html = super.asHTML(indent, context);

    const childNodesHTML = html,  ///
          startingTag = `<${tagName}>`,
          closingTag = `</${tagName}>`;

    html = `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  createDOMElement(context) {
    let domElement;

    domElement = document.createElement(tagName);

    this.setDOMElement(domElement);

    const parentDOMElement = domElement;  ///

    domElement = super.createDOMElement(context);

    parentDOMElement.appendChild(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(StronglyEmphasisedTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(StronglyEmphasisedTextMarkdownNode.prototype, contentMixins);

export default StronglyEmphasisedTextMarkdownNode;