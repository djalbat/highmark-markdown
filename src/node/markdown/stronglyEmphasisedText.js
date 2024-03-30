"use strict";

import contentMixins from "../../mixins/content";

import MarkdownNode from "../markdown";
import ruleNameToHTMLMap from "../../ruleNameToHTMLMap";

import { STRONG_TEXT_RULE_NAME } from "../../ruleNames";

const { tagName } = ruleNameToHTMLMap[STRONG_TEXT_RULE_NAME];

class StronglyEmphasisedTextMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    let html = super.asHTML(indent, context);

    const childNodesHTML = html,  ///
          startingTag = `<${tagName}>`,
          closingTag = `<\\${tagName}>`;

    html = `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  createDOMElement(context) {
    let domElement = super.createDOMElement(context);

    const childDOMElement = domElement; ///

    domElement = document.createElement(tagName);

    this.setDOMElement(domElement);

    const parentDOMElement = domElement,  ///
          siblingDOMElement = null;

    domElement = childDOMElement; ///

    parentDOMElement.insertBefore(domElement, siblingDOMElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(StronglyEmphasisedTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(StronglyEmphasisedTextMarkdownNode.prototype, contentMixins);

export default StronglyEmphasisedTextMarkdownNode;