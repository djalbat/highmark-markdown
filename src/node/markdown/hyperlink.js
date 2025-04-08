"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(HyperlinkLinkMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(HyperlinkLinkMarkdownNode.prototype, contentMixins);

export default HyperlinkLinkMarkdownNode;
