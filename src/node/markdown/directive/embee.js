"use strict";

import MarkdownNode from "../../../node/markdown";
import PathMarkdownNode from "../../../node/markdown/path";
import EmbedDirectiveTransform from "../../../transform/embedDirective";

import { divisionMarkdownNodeFromNode, subDivisionMarkdownNodeFromNode } from "../../../utilities/query";

export default class EmbedDirectiveMarkdownNode extends MarkdownNode {
  filePath(context) {
    const filePath = this.fromFirstLastChildNode((firstLastChildNode) => {
      let filePath = null;

      const firstLastChildNodePathMarkdownNode = (firstLastChildNode instanceof PathMarkdownNode);

      if (firstLastChildNodePathMarkdownNode) {
        const pathMarkdownNode = firstLastChildNode, ///
              pathMarkdownNodePath = pathMarkdownNode.path(context);

        filePath = pathMarkdownNodePath; ///
      }

      return filePath;
    });

    return filePath;
  }

  resolveEmbedding(context) {
    let embedDirectiveTransform = null;

    const filePath = this.filePath(context);

    if (filePath !== null) {
      const { importer } = context;

      importer(filePath, context);

      const { importedNode = null,
              importedTokens = null } = context;

      if (importedNode !== null) {
        delete context.importedNode;
        delete context.importedTokens;

        const node = importedNode,  ///
              divisionMarkdownNode = divisionMarkdownNodeFromNode(node);

        if (divisionMarkdownNode !== null) {
          const node = divisionMarkdownNode,  ///
                tokens = importedTokens,  ///
                subDivisionMarkdownNode = subDivisionMarkdownNodeFromNode(node);

          if (subDivisionMarkdownNode !== null) {
            divisionMarkdownNode.removeSubDivisionMarkdownNode(subDivisionMarkdownNode);

            embedDirectiveTransform = EmbedDirectiveTransform.fromSubDivisionMarkdownNodeAndTokens(subDivisionMarkdownNode, tokens);
          }
        }
      }
    }

    return embedDirectiveTransform;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
