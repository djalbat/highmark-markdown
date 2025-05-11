"use strict";

import NameCSSNode from "../../node/css/name";
import ValueCSSNode from "../../node/css/value";
import StyleCSSNode from "../../node/css/style";
import ClassCSSNode from "../../node/css/class";
import ErrorCSSNode from "../../node/css/error";
import ValuesCSSNode from "../../node/css/values";
import RuleSetCSSNode from "../../node/css/ruleSet";
import NonsenseCSSNode from "../../node/css/nonsense";
import ArgumentCSSNode from "../../node/css/argument";
import SelectorCSSNode from "../../node/css/selector";
import SelectorsCSSNode from "../../node/css/selectors";
import ArgumentsCSSNode from "../../node/css/arguments";
import IdentifierCSSNode from "../../node/css/identifier";
import DeclarationCSSNode from "../../node/css/declaration";
import PseudoClassCSSNode from "../../node/css/pseudoClass";
import SelectorsListCSSNode from "../../node/css/selectorsList";

import { NAME_MARKDOWN_STYLE_RULE_NAME,
         VALUE_MARKDOWN_STYLE_RULE_NAME,
         STYLE_MARKDOWN_STYLE_RULE_NAME,
         CLASS_MARKDOWN_STYLE_RULE_NAME,
         ERROR_MARKDOWN_STYLE_RULE_NAME,
         VALUES_MARKDOWN_STYLE_RULE_NAME,
         RULE_SET_MARKDOWN_STYLE_RULE_NAME,
         NONSENSE_MARKDOWN_STYLE_RULE_NAME,
         ARGUMENT_MARKDOWN_STYLE_RULE_NAME,
         SELECTOR_MARKDOWN_STYLE_RULE_NAME,
         SELECTORS_MARKDOWN_STYLE_RULE_NAME,
         ARGUMENTS_MARKDOWN_STYLE_RULE_NAME,
         IDENTIFIER_MARKDOWN_STYLE_RULE_NAME,
         DECLARATION_MARKDOWN_STYLE_RULE_NAME,
         PSEUDO_CLASS_MARKDOWN_STYLE_RULE_NAME,
         SELECTORS_LIST_MARKDOWN_STYLE_RULE_NAME } from "../../ruleNames/markdown";

const cssNodeMap = {
  [NAME_MARKDOWN_STYLE_RULE_NAME]: NameCSSNode,
  [VALUE_MARKDOWN_STYLE_RULE_NAME]: ValueCSSNode,
  [STYLE_MARKDOWN_STYLE_RULE_NAME]: StyleCSSNode,
  [CLASS_MARKDOWN_STYLE_RULE_NAME]: ClassCSSNode,
  [ERROR_MARKDOWN_STYLE_RULE_NAME]: ErrorCSSNode,
  [VALUES_MARKDOWN_STYLE_RULE_NAME]: ValuesCSSNode,
  [RULE_SET_MARKDOWN_STYLE_RULE_NAME]: RuleSetCSSNode,
  [NONSENSE_MARKDOWN_STYLE_RULE_NAME]: NonsenseCSSNode,
  [ARGUMENT_MARKDOWN_STYLE_RULE_NAME]: ArgumentCSSNode,
  [SELECTOR_MARKDOWN_STYLE_RULE_NAME]: SelectorCSSNode,
  [SELECTORS_MARKDOWN_STYLE_RULE_NAME]: SelectorsCSSNode,
  [ARGUMENTS_MARKDOWN_STYLE_RULE_NAME]: ArgumentsCSSNode,
  [IDENTIFIER_MARKDOWN_STYLE_RULE_NAME]: IdentifierCSSNode,
  [DECLARATION_MARKDOWN_STYLE_RULE_NAME]: DeclarationCSSNode,
  [PSEUDO_CLASS_MARKDOWN_STYLE_RULE_NAME]: PseudoClassCSSNode,
  [SELECTORS_LIST_MARKDOWN_STYLE_RULE_NAME]: SelectorsListCSSNode
};

export function forEachCSSNode(callback) {
  const ruleNames = Object.keys(cssNodeMap);

  ruleNames.forEach((ruleName) => {
    const CSSNode = cssNodeMap[ruleName],
          Class = CSSNode;

    callback(Class, ruleName);
  });
}

export default cssNodeMap;
