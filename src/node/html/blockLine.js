"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";

export default class BlockLineHTMLNode extends HTMLNode {
  childNodesAsPlainText(context) {
    const childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode) => {
      const childNodePlainText = childNode.asPlainText(context);

      childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;

      return childNodesPlainText;
    }, EMPTY_STRING);

    return childNodesPlainText;
  }

  static lines = 2;

  static fromNothing() { return HTMLNode.fromNothing(BlockLineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(BlockLineHTMLNode, outerNode); }
}
