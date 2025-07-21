"use strict";

import MarkdownNode from "../../../node/markdown";
import PathMarkdownNode from "../../../node/markdown/path";
import EmbedDirectiveMarkdownTransform from "../../../transform/markdown/directive/embed";

import { divisionMarkdownNodeFromNode, subDivisionMarkdownNodeFromNode } from "../../../utilities/markdown";

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
    let embedDirectiveMarkdownTransform = null;

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

            embedDirectiveMarkdownTransform = EmbedDirectiveMarkdownTransform.fromSubDivisionMarkdownNodeAndTokens(subDivisionMarkdownNode, tokens);
          }
        }
      }
    }

    return embedDirectiveMarkdownTransform;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
