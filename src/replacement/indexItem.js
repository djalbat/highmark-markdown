"use strict";

import Replacement from "../replacement";

import { SPACE_COMMA } from "../constants";
import { INDEX_ITEM_RULE_NAME } from "../ruleNames";

export default class IndexItemReplacement extends Replacement {
  getIndexItemMarkdownNode() {
    const node = this.getNode(),
          indexItemMarkdownNode = node; ///

    return indexItemMarkdownNode;
  }

  static fromEntryAndPageNumbers(entry, pageNumbers, context) {
    const { tokensFromContent, nodeFromTokensAndStartRuleName } = context,
          entryContent = entry, ///
          pageNumbersContent = pageNumbers.join(SPACE_COMMA),
          content = `${entryContent} ${pageNumbersContent}`,
          startRuleName = INDEX_ITEM_RULE_NAME,
          tokens = tokensFromContent(content),
          node = nodeFromTokensAndStartRuleName(tokens, startRuleName),
          indexItemReplacement = Replacement.fromNodeAndTokens(IndexItemReplacement, node, tokens);

    return indexItemReplacement;
  }
}
