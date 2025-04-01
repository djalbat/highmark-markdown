"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { second } = arrayUtilities;

class HyperlinkLinkMarkdownNode extends MarkdownNode {
  url(context) {
    const multiplicity = this.getMultiplicity();

    let urlTerminalNode;

    if (multiplicity === 1) {
      urlTerminalNode = this.fromFirstChildNode((firstChildNode) => {
        const urlTerminalNode = firstChildNode; ///

        return urlTerminalNode;
      });
    } else {
      urlTerminalNode = this.fromSecondLastChildNode((secondLastChildNode) => {
        const urlTerminalNode = secondLastChildNode; ///

        return urlTerminalNode;
      });
    }

    const urlTerminalNodeContent = urlTerminalNode.getContent(),
          url = urlTerminalNodeContent; ///

    return url;
  }

  inlineText(context) {
    let inlineText = null;

    const multiplicity = this.getMultiplicity();

    if (multiplicity > 1) {
      inlineText = this.fromSecondChildNode((secondChildNode) => {
        const indent = null,
              inlineTextMarkdownNode = secondChildNode, ///
              inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context);

        inlineText = inlineTextMarkdownNodeHTML;  ///
      });
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

  createDOMElement(context) {
    let content;

    const inlineText = this.inlineText(context);

    if (inlineText !== null) {
      content = inlineText; ///
    } else {
      content = this.content(context);
    }

    let domElement;

    const textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  childNodesAsHTML(indent, context) {
    let content;

    const inlineText = this.inlineText(context);

    if (inlineText !== null) {
      content = inlineText;  ///
    } else {
      content = this.content(context);
    }

    const childNodesHTML = content; ///

    return childNodesHTML;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(HyperlinkLinkMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(HyperlinkLinkMarkdownNode.prototype, contentMixins);

export default HyperlinkLinkMarkdownNode;
