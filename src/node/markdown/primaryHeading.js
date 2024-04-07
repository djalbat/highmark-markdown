"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class PrimaryHeadingMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    let { title } = context;

    if (title === null) {
      title = this.title(context);

      Object.assign(context, {
        title
      });
    }

    const html = super.asHTML(indent, context);

    return html;
  }

  title(context) {
    const indent = null,
          childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          lineMarkdownNode = secondChildNode, ///
          lineMarkdownNodeChildNodesHTML = lineMarkdownNode.childNodesAsHTML(indent, context),
          title = lineMarkdownNodeChildNodesHTML;

    return title;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(PrimaryHeadingMarkdownNode, ruleName, childNodes, opacity); }
}
