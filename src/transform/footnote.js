"use strict";

import { Transform } from "occam-dom";

import { footnoteMarkdownNodeFromNode } from "../utilities/query";

export default class FootnoteTransform extends Transform {
  constructor(node, tokens, number) {
    super(node, tokens);

    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  setNumber(number) {
    this.number = number;
  }

  isNumbered() {
    const numbered = (this.number !== null);

    return numbered;
  }

  isUnnumbered() {
    const numbered = this.isNumbered(),
          unnumbered = !numbered;

    return unnumbered;
  }

  getFootnoteMarkdownNode() {
    const node = this.getNode(),
          footnoteMarkdownNode = node;  ///

    return footnoteMarkdownNode;
  }

  static fromNode(node, ...remainingArguments) { return Transform.fromNode(FootnoteTransform, node, ...remainingArguments); }

  static fromFootnoteSubDivisionTransform(footnoteSubDivisionTransform) {
    const node = footnoteSubDivisionTransform.getNode(),
          footnoteMarkdownNode = footnoteMarkdownNodeFromNode(node),
          descendentNode = footnoteMarkdownNode,  ///
          number = null,
          footnoteTransform = footnoteSubDivisionTransform.contract(FootnoteTransform, descendentNode, number);

    return footnoteTransform;
  }
}
