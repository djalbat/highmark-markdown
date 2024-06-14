"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";
import { ESCAPED_TOKEN_TYPE } from "../tokenTypes";
import { leadingIndexFromNodeAndTokens, trailingIndexFromNodeAndTokens } from "../utilities/node";

const { first, last } = arrayUtilities;

export function contentFromNode(node, context) {
  let content = EMPTY_STRING;

  let { tokens } = context;

  const leadingIndex = leadingIndexFromNodeAndTokens(node, tokens),
        trailingIndex = trailingIndexFromNodeAndTokens(node, tokens),
        start = leadingIndex,  ///
        end = trailingIndex + 1;

  tokens = tokens.slice(start, end);

  tokens.forEach((token) => {
    const tokenContent = tokenContentFromToken(token);

    content += tokenContent;
  });

  return content;
}

export function contentFromNodes(nodes, augmentLeft, augmentRight, context) {
  let content = EMPTY_STRING;

  let { tokens } = context;

  const lastNode = last(nodes),
        firstNode = first(nodes),
        leadingIndex = leadingIndexFromNodeAndTokens(firstNode, tokens),
        trailingIndex = trailingIndexFromNodeAndTokens(lastNode, tokens);

  let firstTokenIndex = leadingIndex,  ///
      lastTokenIndex = trailingIndex; ///

  if (augmentLeft) {
    const previousTokenIndex = firstTokenIndex - 1;

    if (previousTokenIndex > -1) {
      const previousToken = tokens[previousTokenIndex],
            previousTokenSignificant = previousToken.isSignificant();

      if (!previousTokenSignificant) {
        firstTokenIndex--;
      }
    }
  }

  if (augmentRight) {
    const tokensLength = tokens.length,
          nextTokenIndex = lastTokenIndex + 1;

    if (nextTokenIndex < tokensLength) {
      const nextToken = tokens[nextTokenIndex],
            nextTokenSignificant = nextToken.isSignificant(),
            nextTokenEndOfLineToken = nextToken.isEndOfLineToken();

      if (nextTokenEndOfLineToken || !nextTokenSignificant) {
        lastTokenIndex++;
      }
    }
  }

  const start = firstTokenIndex,  ///
        end = lastTokenIndex + 1;

  tokens = tokens.slice(start, end);

  tokens.forEach((token) => {
    const tokenContent = tokenContentFromToken(token);

    content += tokenContent;
  });

  return content;
}

export function contentFromNodeAndTokens(node, tokens, offset = 0) {
  let content = EMPTY_STRING;

  const leadingIndex = leadingIndexFromNodeAndTokens(node, tokens) + offset,
        trailingIndex = trailingIndexFromNodeAndTokens(node, tokens);

  for (let index = leadingIndex; index <= trailingIndex; index++) {
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

function tokenContentFromToken(token) {
  let tokenContent = token.getContent();

  const type = token.getType();

  if (type === ESCAPED_TOKEN_TYPE) {
    const start = 1;

    tokenContent = tokenContent.substring(start);
  }

  return tokenContent;
}
