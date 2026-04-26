"use strict";

import HTMLNode from "../../../node/html";

import { EMPTY_STRING } from "../../../constants";

export default class BlockListingHTMLNode extends HTMLNode {
  content(context) {
    let content = this.reduceChildHTMLNode((content, childHTNLNode) => {
      const blockLineHTMLNode = childHTNLNode,  ///
            blockLineHTMLNodeContent = blockLineHTMLNode.content(context);

      content = (content === null) ?
                  blockLineHTMLNodeContent :
                   `${content}
${blockLineHTMLNodeContent}`;

      return content;
    }, null);

    if (content === null) {
      content = EMPTY_STRING;
    }

    return content;
  }

  className(context) {
    const markdownNode = this.getMarkdownNode(),
          languageName = markdownNode.languageName(context),
          className = languageName; ///

    return className;
  }

  static lines = 2;

  static tagName = "pre";

  static className = null;

  static fromNothing(Class, ...remainingArguments) {
    if (Class === undefined) {
      Class = BlockListingHTMLNode; ///
    }

    const blockListingHTMLNode = HTMLNode.fromNothing(Class, ...remainingArguments);

    return blockListingHTMLNode;
  }

  static fromOuterNode(Class, outerNode, ...remainingArguments) {
    if (outerNode === undefined) {
      outerNode = Class;  ///

      Class = BlockListingHTMLNode; ///
    }

    const blockListingHTMLNode = HTMLNode.fromOuterNode(Class, outerNode, ...remainingArguments);

    return blockListingHTMLNode;
  }
}
