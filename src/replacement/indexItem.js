"use strict";

import Replacement from "../replacement";

import { COMMA } from "../constants";
import { INDEX_ITEM_RULE_NAME } from "../ruleNames";

export default class IndexItemReplacement extends Replacement {
  getIndexItemMarkdownNode() {
    const node = this.getNode(),
          indexItemMarkdownNode = node; ///

    return indexItemMarkdownNode;
  }

  static fromEntryAndPageNumbers(entry, pageNumbers, context) {
    const { nodeFromTokens, tokensFromContent } = context,
          entryContent = entry, ///
          pageNumbersContent = pageNumbers.join(COMMA),
          content = `${entryContent} ${pageNumbersContent}`,
          startRuleName = INDEX_ITEM_RULE_NAME,
          tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens, startRuleName),
          indexItemReplacement = Replacement.fromNodeAndTokens(IndexItemReplacement, node, tokens);

    return indexItemReplacement;
  }
}
