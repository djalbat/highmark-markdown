"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";
import { ESCAPED_TOKEN_TYPE } from "../tokenTypes";

const { first, last } = arrayUtilities;

export function contentFromMarkdownNodes(markdownNodes, context, leftTrimmed, rightTrimmed) {
  let content = EMPTY_STRING;

  let { tokens } = context;

  const markdownNodesLength = markdownNodes.length,
        firstMarkdownNode = first(markdownNodes),
        lastMarkdownNode = (markdownNodesLength === 1) ?
                               firstMarkdownNode : ///
                                 last(markdownNodes),
        firstSignificantToken = firstMarkdownNode.getFirstSignificantToken(),
        lastSignificantToken = lastMarkdownNode.getLastSignificantToken(),
        firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
        lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken);

  let firstTokenIndex = firstSignificantTokenIndex,  ///
      lastTokenIndex = lastSignificantTokenIndex; ///

  if (!leftTrimmed) {
    const previousTokenIndex = firstTokenIndex - 1;

    if (previousTokenIndex > -1) {
      const previousToken = tokens[previousTokenIndex],
            previousTokenSignificant = previousToken.isSignificant();

      if (!previousTokenSignificant) {
        firstTokenIndex--;
      }
    }
  }

  if (!rightTrimmed) {
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
  const firstSignificantToken = node.getFirstSignificantToken(),
        lastSignificantToken = node.getLastSignificantToken(),
        firstToken = firstSignificantToken, ///
        lastToken = lastSignificantToken, ///
        firstTokenIndex = tokens.indexOf(firstToken) + offset,  ///
        lastTokenIndex = tokens.indexOf(lastToken);

  let content = EMPTY_STRING;

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

function tokenContentFromToken(token) {
  let tokenContent = token.getContent();

  const type = token.getType();

  if (type === ESCAPED_TOKEN_TYPE) {
    const start = 1;

    tokenContent = tokenContent.substring(start);
  }

  return tokenContent;
}
