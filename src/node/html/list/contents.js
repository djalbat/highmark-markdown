"use strict";

import HTMLNode from "../../../node/html";

import { CONTENTS_LIST_RULE_NAME } from "../../../ruleNames";

export default class ContentsListHTMLNode extends HTMLNode {
  getRuleName() {
    const ruleName = CONTENTS_LIST_RULE_NAME;

    return ruleName;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "ul";

  static className = "contents";

  static fromNothing() { return HTMLNode.fromNothing(ContentsListHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ContentsListHTMLNode, outerNode); }

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
