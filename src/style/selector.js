"use strict";

import ruleNames from "../ruleNames";
import tagNameMap from "../map/tagName";
import classNameMap from "../map/className";

import { nodeQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";
import { DIVISION_RULE_NAME } from "../ruleNames";
import { remainingContentFromNodeTokensAndOffset } from "../utilities/content";

const { STRONG_TEXT_RULE_NAME,
        ORDERED_LIST_RULE_NAME,
        ORDERED_ITEM_RULE_NAME,
        UNORDERED_ITEM_RULE_NAME,
        UNORDERED_LIST_RULE_NAME,
        STRONGLY_EMPHASISED_TEXT_RULE_NAME } = ruleNames;

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
    const ruleNameTerminalNodeContent = ruleNameTerminalNode.getContent(),
          ruleName = ruleNameTerminalNodeContent; ///

    if (ruleName === DIVISION_RULE_NAME) {
      content = null;
    } else {
      content = EMPTY_STRING;

      const ruleNameValuesIncludesRuleName = ruleNameValues.includes(ruleName);

      if (ruleNameValuesIncludesRuleName) {
        const tagName = tagNameMap[ruleName];

        if (tagName !== null) {
          content = `${content}${tagName}`;
        }

        switch (ruleName) {
          case ORDERED_ITEM_RULE_NAME: {
            const tagName = tagNameMap[ORDERED_LIST_RULE_NAME],

            content = `${tagName} > ${content}`;

            break;
          }

          case UNORDERED_ITEM_RULE_NAME: {
            const tagName = tagNameMap[UNORDERED_LIST_RULE_NAME];

            content = `${tagName} > ${content}`;

            break;
          }

          case STRONGLY_EMPHASISED_TEXT_RULE_NAME: {
            const tagName = tagNameMap[STRONG_TEXT_RULE_NAME];

            content = `${content} > ${tagName}`;

            break;
          }
        }

        const className = classNameMap[ruleName];

        if (className !== null) {
          content = `${content}.${className}`;
        }

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
