"use strict";

import HTMLNode from "../../../node/html";

export default class ContentsItemHTMLNode extends HTMLNode {
  static tagName = "li";

  static className = "contents";

  static fromNothing() { return HTMLNode.fromNothing(ContentsItemHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ContentsItemHTMLNode, outerNode); }

  static fromHTMLTransforms(htmlTransforms) {
    const htmlNodes = htmlTransforms.map((htmlTransform) => {
            const htmlNode = htmlTransform.getHTMLNode();

            return htmlNode;
          }),
          childNodes = htmlNodes, ///
          contentsItemHTMLNode = HTMLNode.fromChildNodes(ContentsItemHTMLNode, childNodes);

    return contentsItemHTMLNode;
  }
}
