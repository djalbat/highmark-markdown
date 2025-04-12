"use strict";

import { EMPTY_STRING } from "../constants";

export function contentFromNodeAndTokens(node, tokens, offset = 0) {
  let content = EMPTY_STRING;

  let firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);

  const lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens);

  firstSignificantTokenIndex += offset;

  for (let index = firstSignificantTokenIndex; index <= lastSignificantTokenIndex; index++) {
    const token = tokens[index],
          tokenContent = token.getContent();

    content += tokenContent;
  }

  return content;
}

export function remainingContentFromNodeTokensAndOffset(node, tokens, offset) {
  const content = contentFromNodeAndTokens(node, tokens, offset),
        remainingContent = content; ///

  return remainingContent;
}
