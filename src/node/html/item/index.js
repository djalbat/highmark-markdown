"use strict";

import HTMLNode from "../../../node/html";
import CommaTextHTMLNode from "../../../node/html/text/comma";
import IndexTextHTMLNode from "../../../node/html/text/index";
import IndexLinkHTMLNode from "../../../node/html/link/index";

import { INDEX_ITEM_MARKDOWN_RULE_NAME } from "../../../ruleNames/markdown";

export default class IndexItemHTMLNode extends HTMLNode {
  getRuleName() {
    const ruleName = INDEX_ITEM_MARKDOWN_RULE_NAME;

    return ruleName;
  }

  asHTML(indent, context) {
    let html;

    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context);

    const startingTag = this.startingTag(context),
          closingTag = this.closingTag(context);

    html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;

    return html;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "li";

  static className = "index";

  static fromIndexItem(indexItem) {
    const wordOrPhrase = indexItem.getWordOrPhrase(),
          pageNumbers = indexItem.getPageNumbers(),
          indexSpanHTMLNode = IndexTextHTMLNode.fromWordOrPhrase(wordOrPhrase),
          childNHTMLodes = [
            indexSpanHTMLNode
          ];

    pageNumbers.forEach((pageNumber) => {
      const indexLinkHTMLNOde = IndexLinkHTMLNode.fromPageNumber(pageNumber);

      childNHTMLodes.push(indexLinkHTMLNOde);

      const commaTextHTMLNode = CommaTextHTMLNode.fromNothing();

      childNHTMLodes.push(commaTextHTMLNode);
    });

    childNHTMLodes.pop();

    const indexItemHTMLNode = HTMLNode.fromChildHTMLNodes(IndexItemHTMLNode, childNHTMLodes);

    return indexItemHTMLNode;
  }
}
