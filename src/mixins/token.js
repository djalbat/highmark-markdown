"use strict";

function getFirstTokenIndex(context) {
  let firstTokenIndex;

  const { tokens } = context,
        firstSignificantTokenIndex = this.getFirstSignificantTokenIndex(tokens),
        previousTokenIndex = firstSignificantTokenIndex - 1,
        minimumTokenIndex = 0;

  firstTokenIndex = firstSignificantTokenIndex; ///

  for (let tokenIndex = previousTokenIndex; tokenIndex >= minimumTokenIndex; tokenIndex--) {
    const token = tokens[tokenIndex],
          tokenWhitespaceToken = token.isWhitespaceToken();

    if (!tokenWhitespaceToken) {
      break;
    }

    firstTokenIndex = tokenIndex; ///
  }

  return firstTokenIndex;
}

function getLastTokenIndex(context) {
  let lastTokenIndex;

  const { tokens } = context,
        tokensLength = tokens.length,
        lastSignificantTokenIndex = this.getLastSignificantTokenIndex(tokens),
        nextTokenIndex = lastSignificantTokenIndex + 1,
        maximumTokenIndex = tokensLength - 1;

  lastTokenIndex = lastSignificantTokenIndex; ///

  for (let tokenIndex = nextTokenIndex; tokenIndex <= maximumTokenIndex; tokenIndex++) {
    const token = tokens[tokenIndex],
          tokenWhitespaceToken = token.isWhitespaceToken();

    if (!tokenWhitespaceToken) {
      break;
    }

    lastTokenIndex = tokenIndex; ///
  }

  return lastTokenIndex;
}

const tokenMixins = {
  getFirstTokenIndex,
  getLastTokenIndex
};

export default tokenMixins;
