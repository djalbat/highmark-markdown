"use strict";

import { arrayUtilities } from "necessary";

import DirectiveMarkdownNode from "../../../node/markdown/directive";
import EmbedDirectiveReplacement from "../../../replacement/embedDirective";

const { last } = arrayUtilities;

export default class EmbedDirectiveMarkdownNode extends DirectiveMarkdownNode {
  resolve(context) {
    let embedDirectiveReplacement = null;

    const filePath = this.filePath(context);

    if (filePath !== null) {
      const { importer } = context;

      importer(filePath, context);

      const { importedNode = null,
              importedTokens = null } = context;

      if (importedNode !== null) {
        delete context.importedNode;
        delete context.importedTokens;

        const divisionMarkdownNode = importedNode,  ///
              tokens = importedTokens;  ///

        embedDirectiveReplacement = EmbedDirectiveReplacement.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
      }
    }

    return embedDirectiveReplacement;
  }

  filePath(context) {
    let filePath = null;

    const childNodes = this.getChildNodes(),
          lastChildNode = last(childNodes),
          lastChildNodeTerminalNode = lastChildNode.isTerminalNode();

    if (lastChildNodeTerminalNode) {
      const terminalNode = lastChildNode, ///
            pathTerminalNode  = terminalNode, ///
            pathTerminalNodeContent = pathTerminalNode.getContent();

      filePath = pathTerminalNodeContent; ///
    }

    return filePath;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return DirectiveMarkdownNode.fromRuleNameChildNodesAndOpacity(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
