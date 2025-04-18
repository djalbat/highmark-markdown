"use strict";

import { Transform } from "occam-dom";

import { COMMA } from "../constants";
import { INDEX_ITEM_RULE_NAME } from "../ruleNames";

export default class IndexItemTransform extends Transform {
  getIndexItemMarkdownNode() {
    const node = this.getNode(),
          indexItemMarkdownNode = node; ///

    return indexItemMarkdownNode;
  }

  static fromIndexItem(indexItem, context) {
    const { nodeFromTokens, tokensFromContent } = context,
          wordOrPhrase = indexItem.getWordOrPhrase(),
          pageNumbers = indexItem.getPageNumbers(),
          pageNumbersContent = pageNumbers.join(COMMA),
          content = `${wordOrPhrase},${pageNumbersContent}`,
          startRuleName = INDEX_ITEM_RULE_NAME,
          tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens, startRuleName),
          indexItemTransform = Transform.fromNodeAndTokens(IndexItemTransform, node, tokens);

    return indexItemTransform;
  }
}
