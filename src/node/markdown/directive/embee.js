"use strict";

import { arrayUtilities } from "necessary";

import Replacement from "../../../replacement";
import DirectiveMarkdownNode from "../../../node/markdown/directive";

const { last } = arrayUtilities;

export default class EmbedDirectiveMarkdownNode extends DirectiveMarkdownNode {
  replacement(context) {
    let replacement = null;

    const { importer = null } = context;

    if (importer !== null) {
      const filePath = this.filePath(context);

      importer(filePath, context);

      const { importedNode = null,
              importedTokens = null } = context;

      if (importedNode !== null) {
        delete context.importedNode;
        delete context.importedTokens;
        delete context.importedClassName;

        const node = importedNode,  ///
              tokens = importedTokens;  ///

        replacement = Replacement.fromNodeAndTokens(node, tokens);
      }
    }

    return replacement;
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
