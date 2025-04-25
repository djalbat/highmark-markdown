"use strict";

import MarkdownNode from "../../node/markdown";

const TOPMOST_RULE_NAME = "topmost";

export default class TopmostMarkdownNode extends MarkdownNode {
  getDivisionMarkdownNodeAt(index) {
    const divisionNodeIndex = index,  ///
          childNOde = this.findChildNode((childNode, index) => {
            const childNodeIndex = index; ///

            if (childNodeIndex === divisionNodeIndex) {
              return true;
            }
          }),
          divisionMarkdownNode = childNOde; ///

    return divisionMarkdownNode;
  }

  static fromDivisionMarkdownNodes(divisionMarkdownNodes) {
    let topmostMarkdownNode = null;

    const divisionMarkdownNodesLength = divisionMarkdownNodes.length;

    if (divisionMarkdownNodesLength > 0) {
      const ruleName = TOPMOST_RULE_NAME,
            childNodes = divisionMarkdownNodes, ///
            opacity = null;

      topmostMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(TopmostMarkdownNode, ruleName, childNodes, opacity);
    }

    return topmostMarkdownNode;
  }
}
