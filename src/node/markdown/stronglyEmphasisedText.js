"use strict";

import { arrayUtilities } from "necessary";

import elementMap from "../../elementMap";
import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

import { STRONG_TEXT_RULE_NAME } from "../../ruleNames";

const { second } = arrayUtilities,
      { tagName } = elementMap[STRONG_TEXT_RULE_NAME];

class StronglyEmphasisedTextMarkdownNode extends MarkdownNode {
  inlineText(context) {
    const indent = null,
          childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          inlineTextMarkdownNode = secondChildNode, ///
          inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context),
          inlineText = inlineTextMarkdownNodeHTML;  ///

    return inlineText;
  }

  createDOMElement(context) {
    let domElement;

    domElement = document.createElement(tagName);

    const parentDOMElement = domElement,  ///
          childDOMElement = this.createChildDOMElement(context);

    domElement = childDOMElement; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  createChildDOMElement(context) {
    const inlineText = this.inlineText(context),
          content = inlineText; ///

    let domElement;

    const textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  asHTML(indent, context) {
    let html = super.asHTML(indent, context);

    const childNodesHTML = html,  ///
          startingTag = `<${tagName}>`,
          closingTag = `</${tagName}>`;

    html = `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(StronglyEmphasisedTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(StronglyEmphasisedTextMarkdownNode.prototype, contentMixins);

export default StronglyEmphasisedTextMarkdownNode;
