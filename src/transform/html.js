"use strict";

import { Transform, transformUtilities } from "occam-dom";

import MarkdownTransform from "./markdown";

const { tokensFromNodeAndTokens } = transformUtilities;

export default class HTMLTransform extends Transform {
  constructor(node, tokens, markdownTransform) {
    super(node, tokens);

    this.markdownTransform = markdownTransform;
  }

  getMarkdownTransform() {
    return this.markdownTransform;
  }

  remove(context) {
    const node = this.getNode(),
          childNode = node, ///
          parentNode = node.getParentNode();

    parentNode.removeChildNode(childNode);

    this.markdownTransform.remove(context);
  }

  static fromHTNLNOde(Class, htmlNode, context) {
    let node,
        tokens;

    const outerNode = htmlNode.getOuterNode(),
          markdownNode = outerNode; ///

    node = markdownNode;  ///

    ({ tokens } = context);

    tokens = tokensFromNodeAndTokens(node, tokens);

    const markdownTransform = MarkdownTransform.fromNodeAndTokens(node, tokens);

    node = htmlNode;  ///

    tokens = null;

    const htmlTransform = Transform.fromNodeAndTokens(Class, node, tokens, markdownTransform);

    return htmlTransform;
  }
}
