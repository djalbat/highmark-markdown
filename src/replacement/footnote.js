"use strict";

import Replacement from "../replacement";

import { footnoteMarkdownNodeFromNode } from "../utilities/query";

export default class FootnoteReplacement extends Replacement {
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

  static fromNode(node, context, ...remainingArguments) { return Replacement.fromNode(FootnoteReplacement, node, context, ...remainingArguments); }

  static fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement) {
    const node = footnoteSubDivisionReplacement.getNode(),
          footnoteMarkdownNode = footnoteMarkdownNodeFromNode(node),
          descendentNode = footnoteMarkdownNode,  ///
          number = null,
          footnoteReplacement = footnoteSubDivisionReplacement.contract(FootnoteReplacement, descendentNode, number);

    return footnoteReplacement;
  }
}
