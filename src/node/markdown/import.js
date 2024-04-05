"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { fifth } = arrayUtilities;

export default class ImportMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    let html = null;

    const { importer = null } = context;

    if (importer !== null) {
      const path = this.path(context);

      html = importer(path, indent, context);
    }

    return html;
  }

  path(context) {
    const childNodes = this.getChildNodes(),
          fifthChildNode = fifth(childNodes),
          doublyQuotedStringLiteralTerminalNode  = fifthChildNode,
          content = doublyQuotedStringLiteralTerminalNode.getContent();

    debugger
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImportMarkdownNode, ruleName, childNodes, opacity); }
}
