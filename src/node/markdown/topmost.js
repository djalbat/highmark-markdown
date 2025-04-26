"use strict";

import MarkdownNode from "../../node/markdown";
import DivisionMarkdownNode from "../../node/markdown/division";

export default class TopmostMarkdownNode extends MarkdownNode {
  resolve(context) {
    const firstDivisionMarkdownNode = this.findFirstDivisionMarkdownNode();

    if (firstDivisionMarkdownNode === null) {
      return;
    }

    const topmostMarkdownNode = this; ///

    firstDivisionMarkdownNode.resolveIncludes(topmostMarkdownNode, context);

    // this.filterDivisionMarkdownNode((divisionMarkdownNode) => {
    //   const ignored = divisionMarkdownNode.isIgnored();
    //
    //   if (!ignored) {
    //     return true;
    //   }
    // });

    // this.forEachDivisionMarkdownNode((divisionMarkdownNode) => {
    //   divisionMarkdownNode.resolveEmbeddings(context);
    // });
  }

  findFirstDivisionMarkdownNode() {
    const firstDivisionMarkdownNode = this.findDivisionMarkdownNode((divisionMarkdownNode) => {
      return true;
    }) || null;

    return firstDivisionMarkdownNode;
  }

  removeFirstDivisionMarkdownNode() {
    const firstDivisionMarkdownNode = this.findFirstDivisionMarkdownNode();

    if (firstDivisionMarkdownNode !== null) {
      const childNode = firstDivisionMarkdownNode;  ///

      this.removeChildNode(childNode);
    }

    return firstDivisionMarkdownNode;
  }

  findDivisionMarkdownNode(callback) {
    const firstDivisionMarkdownNode = this.findChildNode((childNode) => {
      const childNodeDivisionMarkdownNode = (childNode instanceof DivisionMarkdownNode);

      if (childNodeDivisionMarkdownNode) {
        const divisionMarkNode = childNode, ///
              result = callback(divisionMarkNode);

        if (result) {
          return true;
        }
      }
    });

    return firstDivisionMarkdownNode;
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
