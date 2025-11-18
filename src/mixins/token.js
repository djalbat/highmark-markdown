"use strict";

function getFirstTokenIndex(context) {
  let firstTokenIndex;

  const { tokens } = context,
        minimumTokenIndex = 0,
        firstSignificantTokenIndex = this.getFirstSignificantTokenIndex(tokens);

  firstTokenIndex = firstSignificantTokenIndex; ///

  if (firstTokenIndex > minimumTokenIndex) {
    firstTokenIndex--;

    while (firstTokenIndex >= minimumTokenIndex) {
      const token = tokens[firstTokenIndex],
            tokenWhitespaceToken = token.isWhitespaceToken();

      if (!tokenWhitespaceToken) {
        firstTokenIndex++;

        break;
      }

      firstTokenIndex--;
    }
  }

  return firstTokenIndex;
}

function getLastTokenIndex(context) {
  let lastTokenIndex;

  const { tokens } = context,
        tokensLength = tokens.length,
        maximumTokenIndex = tokensLength - 1,
        lastSignificantTokenIndex = this.getLastSignificantTokenIndex(tokens);

  lastTokenIndex = lastSignificantTokenIndex; ///

  if (lastTokenIndex < maximumTokenIndex) {
    lastTokenIndex++;

    while (lastTokenIndex <= maximumTokenIndex) {
      const token = tokens[lastTokenIndex],
            tokenWhitespaceToken = token.isWhitespaceToken();

      if (!tokenWhitespaceToken) {
        lastTokenIndex--;

        break;
      }

      lastTokenIndex++;
    }
  }

  return lastTokenIndex;
}

const tokenMixins = {
  getFirstTokenIndex,
  getLastTokenIndex
};

export default tokenMixins;
