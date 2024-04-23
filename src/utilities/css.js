"use strict";

import Division from "../style/division";
import MediaType from "../style/mediaType";
import SelectorsList from "../style/selectorsList";
import MarkdownStyleLexer from "../markdownStyle/lexer";
import MarkdownStyleParser from "../markdownStyle/parser";

import { EMPTY_STRING } from "../constants";

const markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing();

export function cssFromMarkdownStyleMediaTypeAndSelectorsList(markdownStyle, mediaType, selectorsList) {
  let css = EMPTY_STRING;

  const lexer = markdownStyleLexer, ///
        parser =  markdownStyleParser,  ///
        content = markdownStyle, ///
        tokens = lexer.tokenise(content),
        node = parser.parse(tokens);

  if (node !== null) {
    const division = Division.fromNodeTokensMediaTypeAndSelectorsList(node, tokens, mediaType, selectorsList);

    css = division.asCSS();
  }

  return css;
}

export function cssFromMarkdownStyleMediaTypeNameAndSelectorString(markdownStyle, mediaTypeName, selectorString) {
  const selectorsList = SelectorsList.fromSelectorsString(selectorString),
        mediaType = MediaType.fromMediaTypeName(mediaTypeName),
        css = cssFromMarkdownStyleMediaTypeAndSelectorsList(markdownStyle, mediaType, selectorsList);

  return css;
}

export default {
  cssFromMarkdownStyleMediaTypeAndSelectorsList,
  cssFromMarkdownStyleMediaTypeNameAndSelectorString
};
