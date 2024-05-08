"use strict";

export default class ClonedNode {
  constructor(node, tokens) {
    this.node = node;
    this.tokens = tokens;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getChildNodes() { return this.node.getChildNodes(); }

  static fromNodeAndTokens(node, tokens) {
    const offset = offsetFromNodeAndTokens(node, tokens),
          replacementTokens = replacementTokensFromNodeAndTokens(node, tokens);

    node = node.clone();  ///

    replaceNodeTokens(node, replacementTokens, offset, tokens);

    tokens = replacementTokens; ///

    const clonedNode = new ClonedNode(node, tokens);

    return clonedNode;
  }
}

function replaceNodeTokens(node, replacementTokens, offset, tokens) {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    replaceTerminalNodeTokens(terminalNode, replacementTokens, offset, tokens);
  } else {
    const nonTerminalNode = node;  ///

    replaceNonTerminalNodeTokens(nonTerminalNode, replacementTokens, offset, tokens);
  }
}

function replaceChildNodesTokens(childNodes, replacementTokens, offset, tokens) {
  childNodes.forEach((childNode) => {
    const node = childNode; ///

    replaceNodeTokens(node, replacementTokens, offset, tokens);
  });
}

function replaceTerminalNodeTokens(terminalNode, replacementTokens, offset, tokens) {
  let index,
      significantToken;

  significantToken = terminalNode.getSignificantToken();

  if (significantToken !== null) {
    index = tokens.indexOf(significantToken);

    index -= offset;

    const replacementToken = replacementTokens[index];

    significantToken = replacementToken;  ///

    terminalNode.setSignificantToken(significantToken);
  }
}

function replaceNonTerminalNodeTokens(nonTerminalNode, replacementTokens, offset, tokens) {
  const childNodes = nonTerminalNode.getChildNodes();

  replaceChildNodesTokens(childNodes, replacementTokens, offset, tokens);
}

function offsetFromNodeAndTokens(node, tokens) {
  let offset;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,  ///
          significantToken = terminalNode.getSignificantToken();

    if (significantToken === null) {
      offset = -1;
    } else {
      const significantTokenIndex = tokens.indexOf(significantToken);

      offset = significantTokenIndex; ///
    }
  } else {
    const nonTerminalNode = node,  ///
          firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
          firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken);

    offset = firstSignificantTokenIndex;  ///
  }

  return offset;
}

function replacementTokensFromNodeAndTokens(node, tokens) {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,  ///
          significantToken = terminalNode.getSignificantToken();

    if (significantToken === null) {
      tokens = [];
    } else {
      const token = significantToken; ///

      tokens = [
        token
      ];
    }
  } else {
    const nonTerminalNode = node,  ///
          lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
          firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
          lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
          firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
          start = firstSignificantTokenIndex, ///
          end = lastSignificantTokenIndex + 1;

    tokens = tokens.slice(start, end);  ///
  }

  const replacementTokens = tokens.map((token) => {  ///
    const replacementToken = token.clone();  ///;

    return replacementToken;
  });

  return replacementTokens;
}
