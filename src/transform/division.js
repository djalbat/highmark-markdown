"use strict";

import { Transform } from "occam-dom";

export default class DivisionTransform extends Transform {
  constructor(node, tokens, divisionMarkdownNode) {
    super(node, tokens);

    this.divisionMarkdownNode = divisionMarkdownNode;
  }

  getDivisionMarkdownNode() {
    return this.divisionMarkdownNode;
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
    const removedNode = this.divisionMarkdownNode, ///
          parentNode = topmostMarkdownNode;

    super.removeFrom(removedNode, parentNode, context);
  }

  static fromDivisionMarkdownNode(Class, divisionMarkdownNode, ...remainingArguments) {
    const node = divisionMarkdownNode, ///
          divisionTransform = Transform.fromNode(Class, node, divisionMarkdownNode, ...remainingArguments);

    return divisionTransform;
  }
}
