"use strict";

import contentMixins from "../../mixins/content";

import MarkdownNode from "../markdown";
import ruleNameToHTMLMap from "../../ruleNameToHTMLMap";

import { STRONG_TEXT_RULE_NAME } from "../../ruleNames";

const strongTextHTML = ruleNameToHTMLMap[STRONG_TEXT_RULE_NAME],
      { tagName: strongTextTagName } = strongTextHTML;

class StronglyEmphasisedTextMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    let domElement = super.createDOMElement(context);

    const childDOMElement = domElement, ///
          tagName = strongTextTagName; ///

    domElement = document.createElement(tagName);

    this.setDOMElement(domElement);

    const parentDOMElement = domElement,  ///
          siblingDOMElement = null;

    domElement = childDOMElement; ///

    parentDOMElement.insertBefore(domElement, siblingDOMElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(StronglyEmphasisedTextMarkdownNode, ruleName, childNodes, ambiguous); }
}

Object.assign(StronglyEmphasisedTextMarkdownNode.prototype, contentMixins);

export default StronglyEmphasisedTextMarkdownNode;