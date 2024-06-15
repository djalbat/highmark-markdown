"use strict";

import { arrayUtilities } from "necessary";

import ImportedReplacement from "../../../replacement/imported";
import DirectiveMarkdownNode from "../../../node/markdown/directive";

const { last } = arrayUtilities;

export default class EmbedDirectiveMarkdownNode extends DirectiveMarkdownNode {
  import(context) {
    let importedReplacement = null;

    const { importer = null } = context;

    if (importer !== null) {
      const filePath = this.filePath(context);

      importer(filePath, context);

      const { importedNode = null,
              importedTokens = null } = context;

      if (importedNode !== null) {
        const node = importedNode,  ///
              tokens = importedTokens;  ///

        importedReplacement = ImportedReplacement.fromNodeAndTokens(node, tokens);

        delete context.importedNode;
        delete context.importedTokens;
        delete context.importedClassName;
      }
    }

    return importedReplacement;
  }

  filePath(context) {
    const childNodes = this.getChildNodes(),
          lastChildNode = last(childNodes),
          pathTerminalNode  = lastChildNode, ///
          pathTerminalNodeContent = pathTerminalNode.getContent(),
          filePath = pathTerminalNodeContent; ///

    return filePath;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return DirectiveMarkdownNode.fromRuleNameChildNodesAndOpacity(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
