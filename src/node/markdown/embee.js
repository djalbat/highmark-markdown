"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import ReplacementNodeAndTokens from "../../replacementNodeAndTokens";

const { fourth } = arrayUtilities;

export default class EmbedMarkdownNode extends MarkdownNode {
  replacementNodeAndTokens(context) {
    let replacementNodeAndTokens = null;

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

        replacementNodeAndTokens = ReplacementNodeAndTokens.fromNodeAndTokens(node, tokens);
      }
    }

    return replacementNodeAndTokens;
  }

  filePath(context) {
    const childNodes = this.getChildNodes(),
          fourthChildNode = fourth(childNodes),
          pathTerminalNode  = fourthChildNode, ///
          pathTerminalNodeContent = pathTerminalNode.getContent(),
          filePath = pathTerminalNodeContent; ///

    return filePath;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EmbedMarkdownNode, ruleName, childNodes, opacity); }
}
