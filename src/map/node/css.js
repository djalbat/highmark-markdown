"use strict";

import NameCSSNode from "../../node/css/name";
import ValueCSSNode from "../../node/css/value";
import ClassCSSNode from "../../node/css/class";
import ColourCSSNode from "../../node/css/colour";
import StringCSSNode from "../../node/css/string";
import AmountCSSNode from "../../node/css/amount";
import ValuesCSSNode from "../../node/css/values";
import ContentCSSNode from "../../node/css/content";
import TopmostCSSNode from "../../node/css/topmost";
import RuleSetCSSNode from "../../node/css/ruleSet";
import VerbatimCSSNode from "../../node/css/verbatim";
import RuleNameCSSNode from "../../node/css/ruleName";
import ArgumentCSSNode from "../../node/css/argument";
import SelectorCSSNode from "../../node/css/selector";
import SelectorsCSSNode from "../../node/css/selectors";
import ArgumentsCSSNode from "../../node/css/arguments";
import IdentifierCSSNode from "../../node/css/identifier";
import DeclarationCSSNode from "../../node/css/declaration";
import PseudoClassCSSNode from "../../node/css/pseudoClass";
import SelectorsListCSSNode from "../../node/css/selectorsList";

import { CSS_MARKDOWN_STYLE_RULE_NAME,
         NAME_MARKDOWN_STYLE_RULE_NAME,
         VALUE_MARKDOWN_STYLE_RULE_NAME,
         CLASS_MARKDOWN_STYLE_RULE_NAME,
         AMOUNT_MARKDOWN_STYLE_RULE_NAME,
         STRING_MARKDOWN_STYLE_RULE_NAME,
         COLOUR_MARKDOWN_STYLE_RULE_NAME,
         VALUES_MARKDOWN_STYLE_RULE_NAME,
         CONTENT_MARKDOWN_STYLE_RULE_NAME,
         RULE_SET_MARKDOWN_STYLE_RULE_NAME,
         VERBATIM_MARKDOWN_STYLE_RULE_NAME,
         ARGUMENT_MARKDOWN_STYLE_RULE_NAME,
         SELECTOR_MARKDOWN_STYLE_RULE_NAME,
         RULE_NAME_MARKDOWN_STYLE_RULE_NAME,
         SELECTORS_MARKDOWN_STYLE_RULE_NAME,
         ARGUMENTS_MARKDOWN_STYLE_RULE_NAME,
         IDENTIFIER_MARKDOWN_STYLE_RULE_NAME,
         DECLARATION_MARKDOWN_STYLE_RULE_NAME,
         PSEUDO_CLASS_MARKDOWN_STYLE_RULE_NAME,
         SELECTORS_LIST_MARKDOWN_STYLE_RULE_NAME } from "../../ruleNames/markdownStyle";

const cssNodeMap = {
  [CSS_MARKDOWN_STYLE_RULE_NAME]: TopmostCSSNode, ///
  [NAME_MARKDOWN_STYLE_RULE_NAME]: NameCSSNode,
  [VALUE_MARKDOWN_STYLE_RULE_NAME]: ValueCSSNode,
  [CLASS_MARKDOWN_STYLE_RULE_NAME]: ClassCSSNode,
  [AMOUNT_MARKDOWN_STYLE_RULE_NAME]: AmountCSSNode,
  [COLOUR_MARKDOWN_STYLE_RULE_NAME]: ColourCSSNode,
  [STRING_MARKDOWN_STYLE_RULE_NAME]: StringCSSNode,
  [VALUES_MARKDOWN_STYLE_RULE_NAME]: ValuesCSSNode,
  [CONTENT_MARKDOWN_STYLE_RULE_NAME]: ContentCSSNode,
  [RULE_SET_MARKDOWN_STYLE_RULE_NAME]: RuleSetCSSNode,
  [VERBATIM_MARKDOWN_STYLE_RULE_NAME]: VerbatimCSSNode,
  [ARGUMENT_MARKDOWN_STYLE_RULE_NAME]: ArgumentCSSNode,
  [SELECTOR_MARKDOWN_STYLE_RULE_NAME]: SelectorCSSNode,
  [RULE_NAME_MARKDOWN_STYLE_RULE_NAME]: RuleNameCSSNode,
  [SELECTORS_MARKDOWN_STYLE_RULE_NAME]: SelectorsCSSNode,
  [ARGUMENTS_MARKDOWN_STYLE_RULE_NAME]: ArgumentsCSSNode,
  [IDENTIFIER_MARKDOWN_STYLE_RULE_NAME]: IdentifierCSSNode,
  [DECLARATION_MARKDOWN_STYLE_RULE_NAME]: DeclarationCSSNode,
  [PSEUDO_CLASS_MARKDOWN_STYLE_RULE_NAME]: PseudoClassCSSNode,
  [SELECTORS_LIST_MARKDOWN_STYLE_RULE_NAME]: SelectorsListCSSNode
};

export function forEachCSSNode(callback) {
  const markdownStyleRuleNames = Object.keys(cssNodeMap);

  markdownStyleRuleNames.forEach((markdownStyleRuleName) => {
    const CSSNode = cssNodeMap[markdownStyleRuleName],
          Class = CSSNode;

    callback(Class, markdownStyleRuleName);
  });
}

export default cssNodeMap;
