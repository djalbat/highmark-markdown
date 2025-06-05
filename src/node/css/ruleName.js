"use strict";

import CSSNode from "../../node/css";
import tagNameMap from "../../map/tagName";
import classNameMap from "../../map/className";

import { EMPTY_STRING } from "../../constants";
import { STRONG_TEXT_MARKDOWN_RULE_NAME,
         ORDERED_LIST_MARKDOWN_RULE_NAME,
         ORDERED_ITEM_MARKDOWN_RULE_NAME,
         UNORDERED_ITEM_MARKDOWN_RULE_NAME,
         UNORDERED_LIST_MARKDOWN_RULE_NAME,
         STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME } from "../../ruleNames/markdown";

export default class RuleNameCSSNode extends CSSNode {
  markdownRuleName() {
    const markdownStyleNode = this.getMarkdownStyleNode(),
          markdownRuleName = markdownStyleNode.markdownRuleName();

    return markdownRuleName;
  }

  asCSS(context) {
    let css = EMPTY_STRING;

    const markdownRuleName = this.markdownRuleName(),
          className = classNameMap[markdownRuleName],
          tagName = tagNameMap[markdownRuleName];

    if (tagName !== null) {
      css = ` ${tagName}`;
    }

    switch (markdownRuleName) {
      case ORDERED_ITEM_MARKDOWN_RULE_NAME: {
        const tagName = tagNameMap[ORDERED_LIST_MARKDOWN_RULE_NAME];

        css = ` ${tagName} > ${css}`;

        break;
      }

      case UNORDERED_ITEM_MARKDOWN_RULE_NAME: {
        const tagName = tagNameMap[UNORDERED_LIST_MARKDOWN_RULE_NAME];

        css = ` ${tagName} > ${css}`;

        break;
      }

      case STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME: {
        const tagName = tagNameMap[STRONG_TEXT_MARKDOWN_RULE_NAME];

        css = `${css} > ${tagName}`;

        break;
      }
    }

    if (className !== null) {
      css = `${css}.${className}`;
    }

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(RuleNameCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(RuleNameCSSNode, outerNode); }
}
