"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { shave } from "../../utilities/string";

const { sixth } = arrayUtilities;

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
          sixthChildNode = sixth(childNodes),
          doublyQuotedStringLiteralTerminalNode  = sixthChildNode,
          content = doublyQuotedStringLiteralTerminalNode.getContent(),
          path = shave(content);  ///

    return path;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImportMarkdownNode, ruleName, childNodes, opacity); }
}
