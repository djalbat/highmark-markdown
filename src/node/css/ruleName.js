"use strict";

import CSSNode from "../../node/css";
import tagNameMap from "../../map/tagName";
import classNameMap from "../../map/className";
import markdownRuleNames from "../../ruleNames/markdown";

import { EMPTY_STRING } from "../../constants";
import { DIVISION_MARKDOWN_RULE_NAME } from "../../ruleNames/markdown";

const { STRONG_TEXT_MARKDOWN_RULE_NAME,
        ORDERED_LIST_MARKDOWN_RULE_NAME,
        ORDERED_ITEM_MARKDOWN_RULE_NAME,
        UNORDERED_ITEM_MARKDOWN_RULE_NAME,
        UNORDERED_LIST_MARKDOWN_RULE_NAME,
        STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME } = markdownRuleNames;

export default class RuleNameCSSNode extends CSSNode {
  markdownRuleName() { return this.outerNode.markdownRuleName(); }

  asCSS(context) {
    let css = EMPTY_STRING;

    const markdownRuleName = this.markdownRuleName();

    if (markdownRuleName !== DIVISION_MARKDOWN_RULE_NAME) {
      const tagName = tagNameMap[markdownRuleName];

      if (tagName !== null) {
        css = `${css}${tagName}`;
      }

      switch (markdownRuleName) {
        case ORDERED_ITEM_MARKDOWN_RULE_NAME: {
          const tagName = tagNameMap[ORDERED_LIST_MARKDOWN_RULE_NAME],

          css = `${tagName} > ${css}`;

          break;
        }

        case UNORDERED_ITEM_MARKDOWN_RULE_NAME: {
          const tagName = tagNameMap[UNORDERED_LIST_MARKDOWN_RULE_NAME];

          css = `${tagName} > ${css}`;

          break;
        }

        case STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME: {
          const tagName = tagNameMap[STRONG_TEXT_MARKDOWN_RULE_NAME];

          css = `${css} > ${tagName}`;

          break;
        }
      }

      const className = classNameMap[markdownRuleName];

      if (className !== null) {
        css = `${css}.${className}`;
      }
    }

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(RuleNameCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(RuleNameCSSNode, outerNode); }
}
