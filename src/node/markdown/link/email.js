"use strict";

import MarkdownNode from "../../../node/markdown";

import { EMAIL_ADDRESS_TOKEN_TYPE } from "../../../tokenTypes";

export default class EmailLinkMarkdownNode extends MarkdownNode {
  emailAddressFromSecondLastChildNode(context) {
    const emailAddress = this.fromSecondLastChildNode((secondLastChildNode) => {
      const terminalNode = secondLastChildNode,  ///
            emailAddress = emailAddressFromTerminalNode(terminalNode);

      return emailAddress;
    });

    return emailAddress;
  }

  emailAddressFromFirstLastChildNode(context) {
    const emailAddress = this.fromFirstLastChildNode((firstLastChildNode) => {
      const terminalNode = firstLastChildNode,  ///
            emailAddress = emailAddressFromTerminalNode(terminalNode);

      return emailAddress;
    });

    return emailAddress;
  }

  emailAddress(context) {
    const simple = this.isSimple(),
          emailAddress = simple ?
                            this.emailAddressFromFirstLastChildNode(context) :
                              this.emailAddressFromSecondLastChildNode(context);

    return emailAddress;
  }

  isSimple() {
    const simple = this.fromFirstLastChildNode((firstLastChildNode) => {
      const terminalNode = firstLastChildNode,  ///
            type = terminalNode.getType(),
            typeEmailAddressTokenType = (type === EMAIL_ADDRESS_TOKEN_TYPE),
            simple = typeEmailAddressTokenType; ///

      return simple;
    });

    return simple;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EmailLinkMarkdownNode, ruleName, childNodes, opacity); }
}

function emailAddressFromTerminalNode(terminalNode) {
  let emailAddress = null;

  const type = terminalNode.getType(),
        typeEmailAddressTokenType = (type === EMAIL_ADDRESS_TOKEN_TYPE);

  if (typeEmailAddressTokenType) {
    const content = terminalNode.getContent();

    emailAddress = content; ///
  }

  return emailAddress;
}