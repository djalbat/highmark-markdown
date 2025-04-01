"use strict";

import PathMarkdownNode from "../path";
import DirectiveMarkdownNode from "../../../node/markdown/directive";
import EmbedDirectiveReplacement from "../../../replacement/embedDirective";

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
    const filePath = this.fromFirstLastChildNode((firstLastChildNode) => {
      let filePath = null;

      const firstLastChildNodePathMarkdownNode = (firstLastChildNode instanceof PathMarkdownNode);

      if (firstLastChildNodePathMarkdownNode) {
        const pathMarkdownNode = firstLastChildNode, ///
              pathMarkdownNodeContent = pathMarkdownNode.getContent();

        filePath = pathMarkdownNodeContent; ///
      }

      return filePath;
    });

    return filePath;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return DirectiveMarkdownNode.fromRuleNameChildNodesAndOpacity(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
