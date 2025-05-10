"use strict";

import HTMLNode from "../../../node/html";
import IndexTextHTMLNode from "../../../node/html/text/index";
import IndexLinkHTMLNode from "../../../node/html/link/index";

import { INDEX_ITEM_RULE_NAME } from "../../../ruleNames";
import CommaTextHTMLNode from "../text/comma";

export default class IndexItemHTMLNode extends HTMLNode {
  getRuleName() {
    const ruleName = INDEX_ITEM_RULE_NAME;

    return ruleName;
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
          childNodes = [
            indexSpanHTMLNode
          ];

    pageNumbers.forEach((pageNumber) => {
      const indexLinkHTMLNOde = IndexLinkHTMLNode.fromPageNumber(pageNumber);

      childNodes.push(indexLinkHTMLNOde);

      const commaTextHTMLNode = CommaTextHTMLNode.fromNothing();

      childNodes.push(commaTextHTMLNode);
    });

    childNodes.pop();

    const indexItemHTMLNode = HTMLNode.fromChildNodes(IndexItemHTMLNode, childNodes);

    return indexItemHTMLNode;
  }
}
