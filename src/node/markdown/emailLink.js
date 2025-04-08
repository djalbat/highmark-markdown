"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EmailLinkMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(EmailLinkMarkdownNode.prototype, contentMixins);

export default EmailLinkMarkdownNode;
