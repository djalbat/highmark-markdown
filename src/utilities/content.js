"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";
import { ESCAPED_TOKEN_TYPE } from "../tokenTypes";

const { first, last } = arrayUtilities;

export function contentFromNode(node, context) {
  let content = EMPTY_STRING;

  let { tokens } = context;

  const lastSignificantToken = node.getLastSignificantToken(),
        firstSignificantToken = node.getFirstSignificantToken(),
        lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
        firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken);

  const start = firstSignificantTokenIndex,  ///
        end = lastSignificantTokenIndex + 1;

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
        lastSignificantToken = lastNode.getLastSignificantToken(),
        firstSignificantToken = firstNode.getFirstSignificantToken(),
        lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
        firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken);

  let firstTokenIndex = firstSignificantTokenIndex,  ///
      lastTokenIndex = lastSignificantTokenIndex; ///

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

  const firstSignificantToken = node.getFirstSignificantToken(),
        lastSignificantToken = node.getLastSignificantToken(),
        firstToken = firstSignificantToken, ///
        lastToken = lastSignificantToken, ///
        firstTokenIndex = tokens.indexOf(firstToken) + offset,  ///
        lastTokenIndex = tokens.indexOf(lastToken);

  for (let index = firstTokenIndex; index <= lastTokenIndex; index++) {
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

export default {
  contentFromNode,
  contentFromNodes,
  contentFromNodeAndTokens,
  remainingContentFromNodeTokensAndOffset
};

function tokenContentFromToken(token) {
  let tokenContent = token.getContent();

  const type = token.getType();

  if (type === ESCAPED_TOKEN_TYPE) {
    const start = 1;

    tokenContent = tokenContent.substring(start);
  }

  return tokenContent;
}
