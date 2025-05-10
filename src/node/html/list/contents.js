"use strict";

import HTMLNode from "../../../node/html";

import { CONTENTS_LIST_MARKDOWN_RULE_NAME } from "../../../ruleNames/markdown";

export default class ContentsListHTMLNode extends HTMLNode {
  getRuleName() {
    const ruleName = CONTENTS_LIST_MARKDOWN_RULE_NAME;

    return ruleName;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "ul";

  static className = "contents";

  static fromContentsItemHTMLTransforms(contentsItemHTMLTransforms) {
    const contentsItemHTMLNodes = contentsItemHTMLTransforms.map((contentsItemHTMLTransform) => {
          const contentsItemHTMLNode = contentsItemHTMLTransform.getContentsItemHTMLNode();

          return contentsItemHTMLNode;
        }),
        childNodes = contentsItemHTMLNodes, ///
        contentsListHTMLNode = HTMLNode.fromChildNodes(ContentsListHTMLNode, childNodes);

    return contentsListHTMLNode;
  }
}
