"use strict";

import MarkdownNode from "../../node/markdown";

import { URL_TOKEN_TYPE } from "../../tokenTypes";

export default class HyperlinkMarkdownNode extends MarkdownNode {
  urlFromSecondLastChildNode(context) {
    const url = this.fromSecondLastChildNode((secondLastChildNode) => {
      const terminalNode = secondLastChildNode,  ///
            url = urlFromTerminalNode(terminalNode);

      return url;
    });

    return url;
  }

  urlFromFirstLastChildNode(context) {
    const url = this.fromFirstLastChildNode((firstLastChildNode) => {
      const terminalNode = firstLastChildNode,  ///
            url = urlFromTerminalNode(terminalNode);

      return url;
    });

    return url;
  }

  url(context) {
    const simple = this.isSimple(),
          url = simple ?
                  this.urlFromFirstLastChildNode(context) :
                    this.urlFromSecondLastChildNode(context);

    return url;
  }

  isSimple() {
    const simple = this.fromFirstLastChildNode((firstLastChildNode) => {
      const terminalNode = firstLastChildNode,  ///
            type = terminalNode.getType(),
            typeURLTokenType = (type === URL_TOKEN_TYPE),
            simple = typeURLTokenType; ///

      return simple;
    });

    return simple;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(HyperlinkMarkdownNode, ruleName, childNodes, opacity); }
}

function urlFromTerminalNode(terminalNode) {
  let url = null;

  const type = terminalNode.getType(),
        typeURLTokenType = (type === URL_TOKEN_TYPE);

  if (typeURLTokenType) {
    const content = terminalNode.getContent();

    url = content; ///
  }

  return url;
}