"use strict";

import NameMarkdownStyleNode from "../../node/markdownStyle/name";
import ValueMarkdownStyleNode from "../../node/markdownStyle/value";
import StyleMarkdownStyleNode from "../../node/markdownStyle/style";
import ClassMarkdownStyleNode from "../../node/markdownStyle/class";
import ErrorMarkdownStyleNode from "../../node/markdownStyle/error";
import ValuesMarkdownStyleNode from "../../node/markdownStyle/values";
import RuleSetMarkdownStyleNode from "../../node/markdownStyle/ruleSet";
import NonsenseMarkdownStyleNode from "../../node/markdownStyle/nonsense";
import ArgumentMarkdownStyleNode from "../../node/markdownStyle/argument";
import SelectorMarkdownStyleNode from "../../node/markdownStyle/selector";
import SelectorsMarkdownStyleNode from "../../node/markdownStyle/selectors";
import ArgumentsMarkdownStyleNode from "../../node/markdownStyle/arguments";
import IdentifierMarkdownStyleNode from "../../node/markdownStyle/identifier";
import DeclarationMarkdownStyleNode from "../../node/markdownStyle/declaration";
import PseudoClassMarkdownStyleNode from "../../node/markdownStyle/pseudoClass";
import SelectorsListMarkdownStyleNode from "../../node/markdownStyle/selectorsList";

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

const markdownStyleNodeMap = {
  [NAME_MARKDOWN_STYLE_RULE_NAME]: NameMarkdownStyleNode,
  [VALUE_MARKDOWN_STYLE_RULE_NAME]: ValueMarkdownStyleNode,
  [STYLE_MARKDOWN_STYLE_RULE_NAME]: StyleMarkdownStyleNode,
  [CLASS_MARKDOWN_STYLE_RULE_NAME]: ClassMarkdownStyleNode,
  [ERROR_MARKDOWN_STYLE_RULE_NAME]: ErrorMarkdownStyleNode,
  [VALUES_MARKDOWN_STYLE_RULE_NAME]: ValuesMarkdownStyleNode,
  [RULE_SET_MARKDOWN_STYLE_RULE_NAME]: RuleSetMarkdownStyleNode,
  [NONSENSE_MARKDOWN_STYLE_RULE_NAME]: NonsenseMarkdownStyleNode,
  [ARGUMENT_MARKDOWN_STYLE_RULE_NAME]: ArgumentMarkdownStyleNode,
  [SELECTOR_MARKDOWN_STYLE_RULE_NAME]: SelectorMarkdownStyleNode,
  [SELECTORS_MARKDOWN_STYLE_RULE_NAME]: SelectorsMarkdownStyleNode,
  [ARGUMENTS_MARKDOWN_STYLE_RULE_NAME]: ArgumentsMarkdownStyleNode,
  [IDENTIFIER_MARKDOWN_STYLE_RULE_NAME]: IdentifierMarkdownStyleNode,
  [DECLARATION_MARKDOWN_STYLE_RULE_NAME]: DeclarationMarkdownStyleNode,
  [PSEUDO_CLASS_MARKDOWN_STYLE_RULE_NAME]: PseudoClassMarkdownStyleNode,
  [SELECTORS_LIST_MARKDOWN_STYLE_RULE_NAME]: SelectorsListMarkdownStyleNode
};

export default markdownStyleNodeMap;
