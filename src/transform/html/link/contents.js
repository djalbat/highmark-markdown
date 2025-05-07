"use strict";

import HTMLTransform from "../../../transform/html";
import LineHTMLTransform from "../../../transform/html/line";
import ContentsLinkHTMLNode from "../../../node/html/link/contents";

export default class ContentsLinkHTMLTransform extends HTMLTransform {
  getIdentifier() {
    const contentsLinkHTMLNode = this.getContentsLinkHTMLNode(),
          identifier = contentsLinkHTMLNode.getIdentifier();

    return identifier;
  }

  getContentsLinkHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          contentsLinkHTMLNode = htmlNode;  ///

    return contentsLinkHTMLNode;
  }

  static fromNestedHeadingNode(nestedHeadingNode, context) {
    let contentsLinkHTMLTransform = null;

    const htmlNode = nestedHeadingNode.getHTMLNode(),
          headingHTMLNode = htmlNode;  ///

    if (headingHTMLNode !== null) {
      const identifier = headingHTMLNode.identifier(context),
            lineHTMLNode = headingHTMLNode.getLineHTMLNode(),
            lineHTMLTransform = LineHTMLTransform.fromLineHTMLNode(lineHTMLNode, context),
            contentsLinkHTMLNode = ContentsLinkHTMLNode.fromLineHTMLTransformAndIdentifier(lineHTMLTransform, identifier),
            htmlNode = contentsLinkHTMLNode;  ///

      contentsLinkHTMLTransform = HTMLTransform.fromHTMLNode(ContentsLinkHTMLTransform, htmlNode);
    }

    return contentsLinkHTMLTransform;
  }
}
