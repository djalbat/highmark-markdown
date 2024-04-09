"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

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
          pathTerminalNode  = fourthChildNode, ///
          pathTerminalNodeContent = pathTerminalNode.getContent(),
          filePath = pathTerminalNodeContent; ///

    return filePath;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImportMarkdownNode, ruleName, childNodes, opacity); }
}
