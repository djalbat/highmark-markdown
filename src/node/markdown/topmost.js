"use strict";

import MarkdownNode from "../../node/markdown";

export default class TopmostMarkdownNode extends MarkdownNode {
  resolve(context) {
    // let divisionMarkdownNodes;
    //
    // divisionMarkdownNodes = resolveIncludes(divisionMarkdownNode, context);
    //
    // resolveEmbeddings(divisionMarkdownNodes, context);
    //
    // const topmostMarkdownNode = TopmostMarkdownNode.fromDivisionMarkdownNodes(divisionMarkdownNodes);
    //
    // return topmostMarkdownNode;
  }

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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TopmostMarkdownNode, ruleName, childNodes, opacity); }
}
