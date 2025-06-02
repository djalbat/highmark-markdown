"use strict";

import HTMLNode from "../../../node/html";

import { CONTENTS_ITEM_MARKDOWN_RULE_NAME } from "../../../ruleNames/markdown";

export default class ContentsItemHTMLNode extends HTMLNode {
  getRuleName() {
    const ruleName = CONTENTS_ITEM_MARKDOWN_RULE_NAME;

    return ruleName;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "li";

  static className = "contents";

  static fromHTMLTransforms(htmlTransforms) {
    const htmlNodes = htmlTransforms.map((htmlTransform) => {
            const htmlNode = htmlTransform.getHTMLNode();

            return htmlNode;
          }),
          childHTMLNodes = htmlNodes, ///
          contentsItemHTMLNode = HTMLNode.fromChildHTMLNodes(ContentsItemHTMLNode, childHTMLNodes);

    return contentsItemHTMLNode;
  }
}
