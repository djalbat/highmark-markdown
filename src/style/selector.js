"use strict";

import ruleNames from "../ruleNames";
import elementMap from "../elementMap";

import { nodeQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";
import { remainingContentFromNodeTokensAndOffset } from "../utilities/content";

const { DIVISION_RULE_NAME,
        STRONG_TEXT_RULE_NAME,
        ORDERED_LIST_RULE_NAME,
        UNORDERED_LIST_RULE_NAME,
        ORDERED_LIST_ITEM_RULE_NAME,
        UNORDERED_LIST_ITEM_RULE_NAME,
        STRONGLY_EMPHASISED_TEXT_RULE_NAME } = ruleNames,
      { tagName: strongTextTagName } = elementMap[STRONG_TEXT_RULE_NAME],
      { tagName: orderedListTagName } = elementMap[ORDERED_LIST_RULE_NAME],
      { tagName: unorderedListTagName } = elementMap[UNORDERED_LIST_RULE_NAME];

const ruleNameValues = Object.values(ruleNames),
      ruleNameTerminalNodeQuery = nodeQuery("/selector/@rule-name");

export default class Selector {
  constructor(content, whitespace) {
    this.content = content;
    this.whitespace = whitespace;
  }

  getContent() {
    return this.content;
  }

  hasWhitespace() {
    return this.whitespace;
  }

  static fromNodeAndTokens(node, tokens) {
    let selector = null;

    const content = contentFromNodeAndTokens(node, tokens);

    if (content !== null) {
      const whitespace = whitespaceFromNode(node);

      selector = new Selector(content, whitespace);
    }

    return selector;
  }
}

function whitespaceFromNode(node) {
  const ruleNameTerminalNode = ruleNameTerminalNodeQuery(node),
        whitespace = (ruleNameTerminalNode !== null);

  return whitespace;
}

function contentFromNodeAndTokens(node, tokens) {
  let content;

  const ruleNameTerminalNode = ruleNameTerminalNodeQuery(node);

  if (ruleNameTerminalNode !== null) {
    content = EMPTY_STRING;

    const ruleNameTerminalNodeContent = ruleNameTerminalNode.getContent(),
          ruleName = ruleNameTerminalNodeContent, ///
          ruleNameValuesIncludesRuleName = ruleNameValues.includes(ruleName);

    if (ruleNameValuesIncludesRuleName) {
      const { tagName, className } = elementMap[ruleName];

      if (tagName !== null) {
        content = `${content}${tagName}`;
      }

      switch (ruleName) {
        case DIVISION_RULE_NAME: {
          content = null;

          break;
        }

        case ORDERED_LIST_ITEM_RULE_NAME: {
          content = `${orderedListTagName} > ${content}`;

          break;
        }

        case UNORDERED_LIST_ITEM_RULE_NAME: {
          content = `${unorderedListTagName} > ${content}`;

          break;
        }

        case STRONGLY_EMPHASISED_TEXT_RULE_NAME: {
          content = `${content} > ${strongTextTagName}`;

          break;
        }
      }

      if (className !== null) {
        content = `${content}.${className}`;
      }

      if (ruleName === DIVISION_RULE_NAME) {
        content = null;
      } else {
        const offset = 1,
              remainingContent = remainingContentFromNodeTokensAndOffset(node, tokens, offset);

        content = `${content}${remainingContent}`;
      }
    }
  } else {
    const offset = 0,
          remainingContent = remainingContentFromNodeTokensAndOffset(node, tokens, offset);

    content = remainingContent; ///
  }

  return content;
}
