"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { first, second, secondLast } = arrayUtilities;

class HyperlinkLinkMarkdownNode extends MarkdownNode {
  url(context) {
    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    let urlTerminalNode;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes);

      urlTerminalNode = firstChildNode;  ///
    } else {
      const secondLastChildNode = secondLast(childNodes);

      urlTerminalNode = secondLastChildNode;  ///
    }

    const urlTerminalNodeContent = urlTerminalNode.getContent(),
          url = urlTerminalNodeContent; ///

    return url;
  }

  inlineText(context) {
    let inlineText = null;

    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength !== 1) {
      const indent = null,
            secondChildNode = second(childNodes),
            inlineTextMarkdownNode = secondChildNode, ///
            inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context);

      inlineText = inlineTextMarkdownNodeHTML;  ///
    }

    return inlineText;
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const url = this.url(context),
          attributeValue = url; ///

    return attributeValue;
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    const inlineText = this.inlineText(context);

    if (inlineText !== null) {
      childNodesHTML = inlineText;  ///
    } else {
      const content = this.content(context);

      childNodesHTML = content; ///
    }

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const inlineText = this.inlineText(context),
          content = (inlineText !== null) ?
                      inlineText :
                        this.content(context),
          textNode = document.createTextNode(content),
          childNodeDOMElement = textNode;  ///

    this.insertDOMElement(childNodeDOMElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(HyperlinkLinkMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(HyperlinkLinkMarkdownNode.prototype, contentMixins);

export default HyperlinkLinkMarkdownNode;
