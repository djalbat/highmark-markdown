"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

const { second } = arrayUtilities;

class EmphasisedTextMarkdownNode extends MarkdownNode {
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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EmphasisedTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(EmphasisedTextMarkdownNode.prototype, contentMixins);

export default EmphasisedTextMarkdownNode;
