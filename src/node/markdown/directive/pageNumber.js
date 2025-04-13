"use strict";

import DirectiveMarkdownNode from "../../../node/markdown/directive";

export default class PageNumberDirectiveMarkdownNode extends DirectiveMarkdownNode {
  constructor(ruleName, childNodes, precedence, opacity, pageNumber) {
    super(ruleName, childNodes, precedence, opacity);

    this.pageNumber = pageNumber;
  }

  getPageNumber() {
    return this.pageNumber;
  }

  setPageNumber(pageNumber) {
    this.pageNumber = pageNumber;
  }

  content(context) {
    const content = this.pageNumber;

    return content;
  }

  clone() { return super.clone(this.pageNumber); }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const pageNumber = null,
          pageNumberDirectiveMarkdownNode = DirectiveMarkdownNode.fromRuleNameChildNodesAndOpacity(PageNumberDirectiveMarkdownNode, ruleName, childNodes, opacity, pageNumber);

    return pageNumberDirectiveMarkdownNode;
  }
}
