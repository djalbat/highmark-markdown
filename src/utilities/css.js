"use strict";

import { Query } from "occam-query";

import { nodeFromNodeAndQuery, nodesFromNodeAndQuery } from "../utilities/query";

import Division from "../style/division";
import SelectorsList from "../style/selectorsList";
import MarkdownStyleLexer from "../markdownStyle/lexer";
import MarkdownStyleParser from "../markdownStyle/parser";

import { EMPTY_STRING } from "../constants";

const markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing();

const ruleSetCSSNodesQuery = Query.fromExpressionString("/*/ruleSet");

export function ruleSetCSSNodesFromNode(node, ruleSetCSSNodes = []) {
  nodesFromNodeAndQuery(node, ruleSetCSSNodesQuery, ruleSetCSSNodes);

  return ruleSetCSSNodes;
}

export function cssFromMarkdownStyleAndSelectorsList(markdownStyle, selectorsList) {
  let css = EMPTY_STRING;

  const lexer = markdownStyleLexer, ///
        parser =  markdownStyleParser,  ///
        content = markdownStyle, ///
        tokens = lexer.tokenise(content),
        node = parser.parse(tokens);

  if (node !== null) {
    const division = Division.fromNodeTokensAndSelectorsList(node, tokens, selectorsList);

    css = division.asCSS();
  }

  return css;
}

export function cssFromMarkdownStyleAndSelectorString(markdownStyle, selectorString) {
  const selectorsList = SelectorsList.fromSelectorsString(selectorString),
        css = cssFromMarkdownStyleAndSelectorsList(markdownStyle, selectorsList);

  return css;
}

export default {
  ruleSetCSSNodesFromNode,
  cssFromMarkdownStyleAndSelectorsList,
  cssFromMarkdownStyleAndSelectorString
};
