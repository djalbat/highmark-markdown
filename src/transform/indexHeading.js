"use strict";

import { Transform } from "occam-dom";

import { INDEX_HEADING_RULE_NAME } from "../ruleNames";

export default class IndexHeadingTransform extends Transform {
  static fromLetter(letter, context) {
    const { nodeFromTokens, tokensFromContent } = context,  ///
          startRuleName = INDEX_HEADING_RULE_NAME,
          content = `${letter}`,
          tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens, startRuleName),
          indexHeadingTransform = Transform.fromNodeAndTokens(IndexHeadingTransform, node, tokens);

    return indexHeadingTransform;
  }
}
