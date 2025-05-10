"use strict";

import HTMLNode from "../../../node/html";

import { INDEX_LIST_MARKDOWN_RULE_NAME } from "../../../ruleNames/markdown";

export default class IndexListHTMLNode extends HTMLNode {
  getRuleName() {
    const ruleName = INDEX_LIST_MARKDOWN_RULE_NAME;

    return ruleName;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "ul";

  static className = "index";

  static fromIndexItemHTMLTransforms(indexItemHTMLTransforms) {
    const indexItemHTMLNodes = indexItemHTMLTransforms.map((indexItemHTMLTransform) => {
            const indexListHTMLNode = indexItemHTMLTransform.getIndexItemHTMLNode();

            return indexListHTMLNode;
          }),
          childNodes = indexItemHTMLNodes,
          indexListHTMLNode = HTMLNode.fromChildNodes(IndexListHTMLNode, childNodes);

    return indexListHTMLNode;
  }
}
