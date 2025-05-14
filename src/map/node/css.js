"use strict";

import NameCSSNode from "../../node/css/name";
import ValueCSSNode from "../../node/css/value";
import ClassCSSNode from "../../node/css/class";
import ValuesCSSNode from "../../node/css/values";
import TopmostCSSNode from "../../node/css/topmost";
import RuleSetCSSNode from "../../node/css/ruleSet";
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
         VALUES_MARKDOWN_STYLE_RULE_NAME,
         ARGUMENT_MARKDOWN_STYLE_RULE_NAME,
         RULE_SET_MARKDOWN_STYLE_RULE_NAME,
         RULE_NAME_MARKDOWN_STYLE_RULE_NAME,
         SELECTOR_MARKDOWN_STYLE_RULE_NAME,
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
  [VALUES_MARKDOWN_STYLE_RULE_NAME]: ValuesCSSNode,
  [ARGUMENT_MARKDOWN_STYLE_RULE_NAME]: ArgumentCSSNode,
  [SELECTOR_MARKDOWN_STYLE_RULE_NAME]: SelectorCSSNode,
  [RULE_SET_MARKDOWN_STYLE_RULE_NAME]: RuleSetCSSNode,
  [RULE_NAME_MARKDOWN_STYLE_RULE_NAME]: RuleNameCSSNode,
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
