"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

const { second } = arrayUtilities;

class StrongTextMarkdownNode extends MarkdownNode {
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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(StrongTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(StrongTextMarkdownNode.prototype, contentMixins);

export default StrongTextMarkdownNode;
