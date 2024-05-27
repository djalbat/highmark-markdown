"use strict";

import MarkdownNode from "../../node/markdown";

import { isIndexEven } from "../../utilities/index";
import { EMPTY_STRING } from "../../constants";

export default class ParagraphMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    let childNodesHTML = EMPTY_STRING;

    const childNodes = this.getChildNodes();

    childNodes.forEach((childNode, index) => {
      const indexEven = isIndexEven(index);

      if (indexEven) {
        const markedTextChildNode = childNode, ///
              markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context);

        childNodesHTML = `${childNodesHTML}${markedTextChildNodeChildNodesHTML}`;
      }
    });

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const domElement = this.getDOMElement(),
          childNodes = this.getChildNodes();

    childNodes.forEach((childNode, index) => {
      const indexEven = isIndexEven(index);

      if (indexEven) {
        const markedTextChildNode = childNode; ///

        markedTextChildNode.createChildNodeDOMElements(domElement, context);
      }
    });
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ParagraphMarkdownNode, ruleName, childNodes, opacity); }
}
