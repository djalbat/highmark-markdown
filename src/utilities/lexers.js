"use strict";

import MarkdownLexer from "../markdown/lexer";
import MarkdownStyleLexer from "../markdownStyle/lexer";

export function markdownLexerFromNothing() {
  const markdownLexer = MarkdownLexer.fromNothing();

  return markdownLexer;
}

export function markdownStyleLexerFromNothing() {
  const markdownStyleLexer = MarkdownStyleLexer.fromNothing();

  return markdownStyleLexer;
}

export default {
  markdownLexerFromNothing,
  markdownStyleLexerFromNothing
};
