"use strict";

import { arrayUtilities } from "necessary";

import DirectiveMarkdownNode from "../../../node/markdown/directive";
import EmbedDirectiveReplacement from "../../../replacement/embedDirective";

const { last } = arrayUtilities;

export default class EmbedDirectiveMarkdownNode extends DirectiveMarkdownNode {
  resolve(context) {
    let embedDirectiveReplacement = null;

    const { importer } = context;

    const filePath = this.filePath(context);

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

    return embedDirectiveReplacement;
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
