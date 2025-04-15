"use strict";

import Replacement from "./";

import { INDEX_HEADING_RULE_NAME } from "../ruleNames";

export default class IndexHeadingReplacement extends Replacement {
  static fromLetter(letter, context) {
    const { nodeFromTokens, tokensFromContent } = context,  ///
          startRuleName = INDEX_HEADING_RULE_NAME,
          content = `${letter}`,
          tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens, startRuleName),
          indexHeadingReplacement = Replacement.fromNodeAndTokens(IndexHeadingReplacement, node, tokens);

    return indexHeadingReplacement;
  }
}
