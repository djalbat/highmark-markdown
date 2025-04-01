"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

class EmailLinkMarkdownNode extends MarkdownNode {
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

  emailAddress(context) {
    const multiplicity = this.getMultiplicity();

    let emailAddressTerminalNode;

    if (multiplicity === 1) {
      emailAddressTerminalNode = this.fromFirstChildNode((firstChildNode) => {
        const emailAddressTerminalNode = firstChildNode;  ///

        return emailAddressTerminalNode;
      });
    } else {
      emailAddressTerminalNode = this.fromSecondLastChildNode((secondLastChildNode) => {
        const emailAddressTerminalNode = secondLastChildNode;  ///

        return emailAddressTerminalNode;
      });
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
