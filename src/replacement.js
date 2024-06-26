"use strict";

import { arrayUtilities } from "necessary";

import { appendNode,
         prependNode,
         removeNode,
         replaceNode,
         replaceNodes,
         addNodesAfter,
         appendTokens,
         prependTokens,
         removeTokens,
         replaceTokens,
         addTokensAfter,
         overwriteClonedNodeTokens,
         clonedTokensFromNodeAndTokens, } from "./utilities/replacement";

const { push } = arrayUtilities;

export default class Replacement {
  constructor(node, tokens) {
    this.node = node;
    this.tokens = tokens;
  }

  getNode() {
    return this.node;
  }

  getTokens(tokens = []) {
    push(tokens, this.tokens);

    return this.tokens;
  }

  getChildNodes() { return this.node.getChildNodes(); }

  contract(Class, descendentNode, ...remainingArguments) {
    if (descendentNode === undefined) {
      descendentNode = Class; ///

      Class = Replacement;  ///
    }

    const node = descendentNode,  ///
          tokens = this.tokens, ///
          context = { ///
            tokens
          },
          replacement = Class.fromNode(node, ...remainingArguments, context);

    return replacement;
  }

  expand(Class, ascendantNode, ...remainingArguments) {
    if (ascendantNode === undefined) {
      ascendantNode = Class;

      Class = Replacement;  ///
    }

    const node = ascendantNode, ///
          tokens = this.tokens, ///
          context = {
            tokens
          },
          replacement = Class.fromNode(node, ...remainingArguments, context);

    return replacement;
  }

  appendTo(parentNode, context) {
    const { tokens } = context,
          appendedNode = this.node,  ///
          appendedTokens = this.tokens;  ///

    appendNode(appendedNode, parentNode);

    appendTokens(appendedTokens, parentNode, tokens);
  }

  prependTo(parentNode, context) {
    const { tokens } = context,
          prependedNode = this.node,  ///
          prependedTokens = this.tokens;  ///

    prependNode(prependedNode, parentNode);

    prependTokens(prependedTokens, parentNode, tokens);
  }

  addAfter(existingNode, parentNode, context) {
    const { tokens } = context,
          addedNodes = this.getChildNodes(), ///
          addedTokens = this.tokens;  ///

    addNodesAfter(existingNode, addedNodes, parentNode);

    addTokensAfter(existingNode, addedTokens, tokens);
  }

  replace(replacedNode, parentNode, context) {
    const { tokens } = context,
          replacementNode = this.node, ///
          replacementTokens = this.tokens; ///

    replaceNode(replacementNode, replacedNode, parentNode);

    replaceTokens(replacementTokens, replacedNode, tokens);
  }

  replaceEx(replacedNode, parentNode, context) {
    const { tokens } = context,
          replacementChildNodes = this.getChildNodes(), ///
          replacementTokens = this.tokens,  ///
          replacementNodes = replacementChildNodes; ///

    replaceNodes(replacementNodes, replacedNode, parentNode);

    replaceTokens(replacementTokens, replacedNode, tokens);
  }

  removeFrom(removedNode, parentNode, context) {
    const { tokens } = context;

    removeTokens(removedNode, tokens);

    removeNode(removedNode, parentNode);
  }

  clone(...remainingArguments) {
    const clonedNode = this.node.clone(),
          clonedTokens = clonedTokensFromNodeAndTokens(this.node, this.tokens);

    overwriteClonedNodeTokens(clonedNode, clonedTokens, this.tokens);

    const Class = this.constructor, ///
          node = clonedNode,  ///
          tokens = clonedTokens, ///
          replacement = new Class(node, tokens, ...remainingArguments);

    return replacement
  }

  static fromNode(Class, node, ...remainingArguments) {
    let context = remainingArguments.pop();

    if (context === undefined) {
      context = node; ///

      node = Class; ///

      Class = Replacement;  ///
    }

    let { tokens } = context;

    const firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens),
          clonedNode = node.clone();

    let clonedTokens;

    if (firstSignificantTokenIndex === null) {
      clonedTokens = [];
    } else {
      const offset = firstSignificantTokenIndex;  ///

      clonedTokens = clonedTokensFromNodeAndTokens(node, tokens);

      overwriteClonedNodeTokens(clonedNode, clonedTokens, tokens, offset);
    }

    node = clonedNode;  ///

    tokens = clonedTokens; ///

    const replacement = new Class(node, tokens, ...remainingArguments);

    return replacement;
  }

  static fromNodeAndTokens(Class, node, tokens, ...remainingArguments) {
    if (tokens === undefined) {
      tokens = node;  ///

      node = Class; ///

      Class = Replacement;  ///
    }

    const replacement = new Class(node, tokens, ...remainingArguments);

    return replacement;
  }
}

