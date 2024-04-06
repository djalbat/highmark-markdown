"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { shave } from "../../utilities/string";

const { fourth } = arrayUtilities;

export default class ImportMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    let html = null;

    const { importer = null } = context;

    if (importer !== null) {
      const filePath = this.filePath(context);

      indent = this.adjustIndent(indent);

      html = importer(filePath, indent, context);
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
  content = shave(content); ///

  const filePath = content;

  return filePath;
}
