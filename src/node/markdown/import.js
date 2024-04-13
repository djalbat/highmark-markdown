"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { replaceTokens } from "../../utilities/tokens";

const { fourth } = arrayUtilities;

export default class ImportMarkdownNode extends MarkdownNode {
  resolveImports(parentNode, context) {
    let html = null;

    const { importer = null } = context;

    if (importer !== null) {
      const filePath = this.filePath(context);

      importer(filePath, context);

      const { importedNode = null, importedTokens = null } = context;

      if (importedNode !== null) {
        const replacedChildNode = this, ///
              replacementTokens = importedTokens, ///
              replacementChildNode = importedNode;  ///

        parentNode.replaceChildNode(replacedChildNode, replacementChildNode);

        replaceTokens(replacedChildNode, replacementTokens, context);

        delete context.importedNode;
        delete context.importedTokens;

        parentNode = this;  ///

        const divisionMarkdownNode = importedNode;  ///

        divisionMarkdownNode.resolveImports(parentNode, context);
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
