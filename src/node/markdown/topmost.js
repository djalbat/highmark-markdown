"use strict";

import MarkdownNode from "../../node/markdown";
import DivisionMarkdownNode from "../../node/markdown/division";

export default class TopmostMarkdownNode extends MarkdownNode {
  resolve(context) {
    // this.forEachDivisionMarkdownNode((divisionMarkdownNode) => {
    //   divisionMarkdownNode.resolveIncludes(context);
    // });

    this.filterDivisionMarkdownNode((divisionMarkdownNode) => {
      const ignored = divisionMarkdownNode.isIgnored();

      if (!ignored) {
        return true;
      }
    });

    // this.forEachDivisionMarkdownNode((divisionMarkdownNode) => {
    //   divisionMarkdownNode.resolveEmbeddings(context);
    // });
  }

  getDivisionMarkdownNodeAt(index) {
    const divisionNodeIndex = index,  ///
          divisionMarkdownNode = this.findDivisionMarkdownNode((childNode, index) => {
            const childNodeIndex = index; ///

            if (childNodeIndex === divisionNodeIndex) {
              return true;
            }
          });

    return divisionMarkdownNode;
  }

  findDivisionMarkdownNode(callback) {
    let index = 0;

    const divisionMarkdownNode = this.findChildNode((childNode) => {
      const childNodeDivisionMarkdownNode = (childNode instanceof DivisionMarkdownNode);

      if (childNodeDivisionMarkdownNode) {
        const divisionMarkNode = childNode, ///
              result = callback(divisionMarkNode, index);

        if (result) {
          return true;
        }

        index++;
      }
    });

    return divisionMarkdownNode;
  }

  filterDivisionMarkdownNode(callback) {
    this.filterChildNode((childNode) => {
      const childNodeDivisionMarkdownNode = (childNode instanceof DivisionMarkdownNode);

      if (!childNodeDivisionMarkdownNode) {
        return true;
      }

      if (childNodeDivisionMarkdownNode) {
        const divisionMarkNode = childNode, ///
              result = callback(divisionMarkNode);

        if (result) {
          return true;
        }
      }
    });
  }

  forEachDivisionMarkdownNode(callback) {
    this.forEachChildNode((childNode) => {
      const childNodeDivisionMarkdownNode = (childNode instanceof DivisionMarkdownNode);

      if (childNodeDivisionMarkdownNode) {
        const divisionMarkNode = childNode; ///

        callback(divisionMarkNode);
      }
    });
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(TopmostMarkdownNode, ruleName, childNodes, opacity); }
}
