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

  appendToDivisionMarkdownNode(divisionMarkdownNode, context) {
    const parentNode = divisionMarkdownNode;  ///

    super.appendTo(parentNode, context);
  }

  prependToDivisionMarkdownNode(divisionMarkdownNode, context) {
    const parentNode = divisionMarkdownNode;  ///

    super.prependTo(parentNode, context);
  }

  removeFromDivisionMarkdownNode(divisionMarkdownNode, context) {
    const removedNode = this.subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;

    super.removeFrom(removedNode, parentNode, context);
  }

  static fromSubDivisionMarkdownNode(Class, subDivisionMarkdownNode, ...remainingArguments) {
    const node = subDivisionMarkdownNode, ///
          subDivisionTransform = Transform.fromNode(Class, node, subDivisionMarkdownNode, ...remainingArguments);

    return subDivisionTransform;
  }
}
