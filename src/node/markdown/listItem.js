"use strict";

import MarkdownNode from "../../node/markdown";

import { isIndexOdd } from "../../utilities/index";
import { EMPTY_STRING } from "../../constants";

export default class ListItemMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    let childNodesHTML = EMPTY_STRING;

    const childNodes = this.getChildNodes();

    childNodes.forEach((childNode, index) => {
      const indexOdd = isIndexOdd(index);

      if (indexOdd) {
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
      const indexOdd = isIndexOdd(index);

      if (indexOdd) {
        const markedTextChildNode = childNode; ///

        markedTextChildNode.createChildNodeDOMElements(domElement, context);
      }
    });
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity); }
}
