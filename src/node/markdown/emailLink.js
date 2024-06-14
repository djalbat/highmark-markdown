"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { first, second, secondLast } = arrayUtilities;

class EmailLinkMarkdownNode extends MarkdownNode {
  lines(context) {
    const lines = 0;

    return lines;
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

  emailAddress(context) {
    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    let emailAddressTerminalNode;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes);

      emailAddressTerminalNode = firstChildNode;  ///
    } else {
      const secondLastChildNode = secondLast(childNodes);

      emailAddressTerminalNode = secondLastChildNode;  ///
    }

    const emailAddressTerminalNodeContent = emailAddressTerminalNode.getContent(),
          emailAddress = emailAddressTerminalNodeContent; ///

    return emailAddress;
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const emailAddress = this.emailAddress(context),
          attributeValue = `mailto:${emailAddress}`;

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
    const inlineText = this.inlineText(context);

    let content;

    if (inlineText !== null) {
      content = inlineText; ///
    } else {
      content = this.content(context);
    }

    const textNode = document.createTextNode(content),
          domElement = textNode; ///

    this.addDOMElement(domElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EmailLinkMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(EmailLinkMarkdownNode.prototype, contentMixins);

export default EmailLinkMarkdownNode;
