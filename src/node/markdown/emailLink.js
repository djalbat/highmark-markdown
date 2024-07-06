"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { first, second, secondLast } = arrayUtilities;

class EmailLinkMarkdownNode extends MarkdownNode {
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

  mount(parentDOMElement, siblingDOMElement, context) {
    this.domElement = this.createDOMElement(context);

    parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
  }

  unmount(parentDOMElement, context) {
    if (this.domElement !== null) {
      parentDOMElement.removeChild(this.domElement);

      this.domElement = null;
    }
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

    const childNodesHTML = content;

    return childNodesHTML;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EmailLinkMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(EmailLinkMarkdownNode.prototype, contentMixins);

export default EmailLinkMarkdownNode;
