"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { push, fourth } = arrayUtilities;

export default class ImportMarkdownNode extends MarkdownNode {
  resolveImports(context) {
    let html = null;

    const { importer = null } = context;

    if (importer !== null) {
      const filePath = this.filePath(context);

      importer(filePath, context);

      const { importedNode = null,
              importedTokens = null,
              importedClassName = null } = context;

      delete context.importedNode;
      delete context.importedTokens;
      delete context.importedClassName;

      if (importedNode !== null) {
        const { tokens, divisionMarkdownNodes } = context,
              divisionMarkdownNode = importedNode,  ///
              divisionClassName = importedClassName,  ///
              ignored = divisionMarkdownNode.isIgnored();

        divisionMarkdownNode.setDivisionClassName(divisionClassName);

        if (!ignored) {
          push(tokens, importedTokens);

          divisionMarkdownNodes.push(divisionMarkdownNode);
        }

        divisionMarkdownNode.resolveImports(context);
      }
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
