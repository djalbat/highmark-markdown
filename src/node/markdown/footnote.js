"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class FootnoteMarkdownNode extends MarkdownNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    ///
  }

  unmount(parentDOMElement, context) {
    ///
  }

  identifier(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          referenceMarkdownNode = firstChildNode,  ///
          identifier = referenceMarkdownNode.identifier(context);

    return identifier;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnoteMarkdownNode, ruleName, childNodes, opacity); }
}
