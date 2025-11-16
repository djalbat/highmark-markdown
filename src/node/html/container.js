"use strict";

import HTMLNode from "../../node/html";

export default class ContainerHTMLNode extends HTMLNode {
  getContainerMarkdownNode() {
    const outerNode = this.getOuterNode(),
          containerMarkdownNode = outerNode;  ///

    return containerMarkdownNode;
  }

  className(context) {
    let className;

    const containerMarkdownNode = this.getContainerMarkdownNode();

    className = containerMarkdownNode.className(context);

    const markdownClassName = className;  ///

    className = super.className(context);

    if (markdownClassName !== null) {
      className = `${className} ${markdownClassName}`;
    }

    return className;
  }

  static tagName = "div";

  static className = "container";

  static fromNothing() { return HTMLNode.fromNothing(ContainerHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ContainerHTMLNode, outerNode); }
}
