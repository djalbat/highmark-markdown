"use strict";

import MarkdownNode from "../../node/markdown";

export default class IndexLinkMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    let domElement;

    const content = this.content(context),
          textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  createChildNodeDOMElements(context) {
    const content = this.content(context),
          textNode  = document.createTextNode(content),
          domElement = textNode; ///

    this.addDOMElement(domElement);
  }

  content(context) {
    const content = this.fromFirstChildNode((firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            content = terminalNode.getContent();

      return content;
    });

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(IndexLinkMarkdownNode, ruleName, childNodes, opacity); }
}
