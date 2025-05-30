"use strict";

import HTMLNode from "../../../node/html";

export default class BlockListingHTMLNode extends HTMLNode {
  content(context) {
    const content = this.reduceChildHTMLNode((content, childHTNLNode) => {
      const blockLineHTMLNode = childHTNLNode,  ///
            blockLineHTMLNodeContent = blockLineHTMLNode.content(context);

      content = (content !== null) ?
                  `${content}
${blockLineHTMLNodeContent}` :
                    blockLineHTMLNodeContent; ///

      return content;
    }, null);

    return content;
  }

  className(context) {
    const markdownNode = this.getMarkdownNode(),
          className = markdownNode.className(context);

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
    if (Class === undefined) {
      outerNode = Class;  ///

      Class = BlockListingHTMLNode; ///
    }

    const blockListingHTMLNode = HTMLNode.fromOuterNode(Class, outerNode, ...remainingArguments);

    return blockListingHTMLNode;
  }
}
