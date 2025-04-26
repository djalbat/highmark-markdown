"use strict";

import { Transform } from "occam-dom";

export default class SubDivisionTransform extends Transform {
  constructor(node, tokens, subDivisionMarkdownNode) {
    super(node, tokens);

    this.subDivisionMarkdownNode = subDivisionMarkdownNode;
  }

  getSubDivisionMarkdownNode() {
    return this.subDivisionMarkdownNode;
  }

  appendToTopmostMarkdownNode(topmostMarkdownNode, context) {
    const parentNode = topmostMarkdownNode;  ///

    super.appendTo(parentNode, context);
  }

  prependToTopmostMarkdownNode(topmostMarkdownNode, context) {
    const parentNode = topmostMarkdownNode;  ///

    super.prependTo(parentNode, context);
  }

  removeFromTopmostMarkdownNode(topmostMarkdownNode, context) {
    const removedNode = this.subDivisionMarkdownNode, ///
          parentNode = topmostMarkdownNode;

    super.removeFrom(removedNode, parentNode, context);
  }

  static fromSubDivisionMarkdownNode(Class, subDivisionMarkdownNode, ...remainingArguments) {
    const node = subDivisionMarkdownNode, ///
          divisionTransform = Transform.fromNode(Class, node, subDivisionMarkdownNode, ...remainingArguments);

    return divisionTransform;
  }
}
