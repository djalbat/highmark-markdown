"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { trim } from "../../utilities/string";

const { fourth } = arrayUtilities;

export default class ImportMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    let html = null;

    const { importer = null } = context;

    if (importer !== null) {
      const filePath = this.filePath(context);

      indent = this.adjustIndent(indent);

      const { tokens } = context;

      html = importer(filePath, indent, context);

      Object.assign(context, {
        tokens
      });
    }

    return html;
  }

  filePath(context) {
    const childNodes = this.getChildNodes(),
          fourthChildNode = fourth(childNodes),
          doublyQuotedStringLiteralTerminalNode  = fourthChildNode,
          content = doublyQuotedStringLiteralTerminalNode.getContent(),
          filePath = filePathFromContent(content);

    return filePath;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImportMarkdownNode, ruleName, childNodes, opacity); }
}

function filePathFromContent(content) {
  content = trim(content); ///

  const filePath = content;

  return filePath;
}
