"use strict";

import DirectiveMarkdownNode from "../../../node/markdown/directive";

export default class PageNumberDirectiveMarkdownNode extends DirectiveMarkdownNode {
  content(context) {
    const { pageNumber } = context,
          content = pageNumber;

    return content;
  }

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const content = this.content(context),
          textNode = document.createTextNode(content),
          domElement = textNode; ///

    this.addDOMElement(domElement);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return DirectiveMarkdownNode.fromRuleNameChildNodesAndOpacity(PageNumberDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
