"use strict";

import HTMLTransform from "../../../transform/html";
import LineHTMLTransform from "../../../transform/html/line";
import ContentsLinkMarkdownNode from "../../../node/html/link/contents";

export default class ContentsLinkHTMLTransform extends HTMLTransform {
  static fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
    // let contentsLinkHTMLTransform = null;
    //
    // const node = nestedHeadingMarkdownNode.getNode(),
    //       headingMarkdownNode = node;  ///
    //
    // if (headingMarkdownNode !== null) {
    //   const identifier = headingMarkdownNode.identifier(context),
    //         lineMarkdownNode = headingMarkdownNode.getLineMarkdownNode(),
    //         lineHTMLTransform = LineHTMLTransform.fromLineMarkdownNode(lineMarkdownNode, context),
    //         contentsLinkMarkdownNode = ContentsLinkMarkdownNode.fromLineHTMLTransformAndIdentifier(lineHTMLTransform, identifier),
    //         node = contentsLinkMarkdownNode,  ///
    //         tokens = lineHTMLTransform.getTokens();
    //
    //   contentsLinkHTMLTransform = HTMLTransform.fromNodeAndTokens(ContentsLinkHTMLTransform, node, tokens);
    // }
    //
    // return contentsLinkHTMLTransform;
  }
}
